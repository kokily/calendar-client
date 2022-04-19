import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getReadCalendar, removeCalendar } from './api/calendar';

function useReadCalendar() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { id }: { id?: string } = router.query;
  const [readModal, setReadModal] = useState(false);
  const { data, isLoading } = useQuery(
    'readCalendar',
    async () => await getReadCalendar(id!),
    { enabled: true }
  );
  const { mutate } = useMutation(removeCalendar, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const onRemoveClick = () => {
    setReadModal(true);
  };

  const onReadCancel = () => {
    setReadModal(false);
  };

  const onRemoveConfirm = async () => {
    if (id) {
      await mutate(id);
      setReadModal(false);
    }
  };

  const onEdit = () => {
    // Todos
  };

  return {
    data,
    isLoading,
    readModal,
    onRemoveClick,
    onReadCancel,
    onRemoveConfirm,
    onEdit,
  };
}

export default useReadCalendar;
