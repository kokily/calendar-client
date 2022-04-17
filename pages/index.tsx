import type { NextPage } from 'next';
import AddModal from '../components/common/AddModal';
import ListCalendar from '../components/ListCalendar';
import useAddCalendar from '../hooks/useAddCalendar';
import useListCalendar from '../hooks/useListCalendar';

const IndexPage: NextPage = () => {
  const { data, isLoading, monList, month, year, prevMonth, nextMonth } =
    useListCalendar();
  const {
    body,
    time,
    date,
    setDate,
    onChange,
    onAddCalendar,
    modal,
    onCancel,
    onModalClick,
  } = useAddCalendar();

  if (isLoading) return <h3>Loading...</h3>;

  return (
    <>
      <ListCalendar
        calendar={data ? data : []}
        monList={monList}
        month={month}
        year={year}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        onModalClick={onModalClick}
      />
      <AddModal
        visible={modal}
        title="일정 추가"
        body={body}
        onCancel={onCancel}
        onAddCalendar={onAddCalendar}
      />
    </>
  );
};

export default IndexPage;
