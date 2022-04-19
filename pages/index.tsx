import type { NextPage } from 'next';
import AddModal from '../components/add/AddModal';
import ListCalendar from '../components/ListCalendar';
import ReadModal from '../components/read/Modal';
import useAddCalendar from '../hooks/useAddCalendar';
import useListCalendar from '../hooks/useListCalendar';
import useReadCalendar from '../hooks/useReadCalendar';

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
  const {
    data: readCalendar,
    readModal,
    onRemoveClick,
    onReadCancel,
    onRemoveConfirm,
    onEdit,
  } = useReadCalendar();

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
        time={time}
        date={date}
        setDate={setDate}
        onChange={onChange}
        onCancel={onCancel}
        onAddCalendar={onAddCalendar}
      />
      <ReadModal
        visible={readModal}
        title="일정 확인"
        body={readCalendar?.body}
        time={readCalendar?.time}
        selected={readCalendar?.selected}
        onRemoveClick={onRemoveClick}
        onReadCancel={onReadCancel}
        onRemove={onRemoveConfirm}
        onEdit={onEdit}
      />
    </>
  );
};

export default IndexPage;
