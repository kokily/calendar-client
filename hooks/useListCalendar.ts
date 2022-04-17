import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getListCalendar } from './api/calendar';

function useListCalendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const { data, isLoading, refetch } = useQuery(
    'calendar',
    async () => await getListCalendar({ month: month + 1, year }),
    {
      enabled: true,
    }
  );

  const monList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const prevMonth = () => {
    if (month !== 0) {
      setMonth((month) => month - 1);
    } else {
      setMonth((month) => month + 11);
      setYear((year) => year - 1);
    }
  };

  const nextMonth = () => {
    if (month !== 11) {
      setMonth((month) => month + 1);
    } else {
      setMonth((month) => month - 11);
      setYear((year) => year + 1);
    }
  };

  useEffect(() => {
    refetch();
  }, [month, year]);

  return {
    data,
    isLoading,
    monList,
    month,
    year,
    prevMonth,
    nextMonth,
  };
}

export default useListCalendar;
