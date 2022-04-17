import type { NextPage } from 'next';
import ListCalendar from '../components/ListCalendar';
import useCalendar from '../hooks/useCalendar';

const IndexPage: NextPage = () => {
  const { data, isLoading, monList, month, year, prevMonth, nextMonth } =
    useCalendar();

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <ListCalendar
      calendar={data ? data : []}
      monList={monList}
      month={month}
      year={year}
      prevMonth={prevMonth}
      nextMonth={nextMonth}
    />
  );
};

export default IndexPage;
