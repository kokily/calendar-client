import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient, useMutation } from 'react-query';
import { addCalendar } from './api/calendar';

function useAddCalendar() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [inputs, setInputs] = useState({
    body: '',
    time: '11:30',
  });
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { mutate: onAddCalendar } = useMutation(addCalendar, {
    onSuccess: (calendar) => {
      const calendars =
        queryClient.getQueryData<CalendarType[]>('calendar') ?? [];
      queryClient.setQueryData('calendar', calendars.concat(calendar));
      setModal(false);
      router.back();
    },
  });

  const onModalClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setModal(false);
  };

  return {
    body: inputs.body,
    time: inputs.time,
    date,
    setDate,
    onChange,
    onAddCalendar,
    modal,
    onModalClick,
    onCancel,
  };
}

export default useAddCalendar;
