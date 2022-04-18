import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import React from 'react';
import Modal from '../Modal';

interface Props {
  visible: boolean;
  title: string;
  body: string;
  time: string;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onCancel: () => void;
  onAddCalendar: () => void;
}

const AddModal: React.FC<Props> = ({
  visible,
  title,
  body,
  time,
  date,
  setDate,
  onChange,
  onCancel,
  onAddCalendar,
}) => (
  <Modal
    visible={visible}
    title={title}
    body={body}
    time={time}
    date={date}
    setDate={setDate}
    onChange={onChange}
    onCancel={onCancel}
    onAddCalendar={onAddCalendar}
  />
);

export default AddModal;
