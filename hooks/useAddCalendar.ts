import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { addCalendar } from './api/calendar';
import useListCalendar from './useListCalendar';

function useAddCalendar() {
  const queryClient = useQueryClient();
  const { refetch } = useListCalendar();
  const [inputs, setInputs] = useState({
    body: '',
    time: '11:30',
  });
  const [date, setDate] = useState(new Date());
  const [modal, setModal] = useState(false);

  const { mutate } = useMutation(addCalendar, {
    onSuccess: (calendar) => {
      const calendars =
        queryClient.getQueryData<CalendarType[]>('calendar') ?? [];
      queryClient.setQueryData('calendar', calendars.concat(calendar));
    },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onAddCalendar = () => {
    mutate({ body: inputs.body, date, time: inputs.time });
    setModal(false);
    refetch();
  };

  const onModalClick = () => {
    setModal(true);
  };

  const onCancel = () => {
    setInputs({ body: '', time: '11:30' });
    setDate(new Date());
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
