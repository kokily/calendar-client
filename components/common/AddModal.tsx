import type { UseMutateFunction } from 'react-query';
import React from 'react';
import Modal from '../Modal';
import { AddCalendarPayload } from '../../hooks/api/calendar';

interface Props {
  visible: boolean;
  title: string;
  body: string;
  onCancel: () => void;
  onAddCalendar: UseMutateFunction<
    CalendarType,
    unknown,
    AddCalendarPayload,
    unknown
  >;
}

const AddModal: React.FC<Props> = ({
  visible,
  title,
  body,
  onCancel,
  onAddCalendar,
}) => (
  <Modal
    visible={visible}
    title={title}
    body={body}
    onCancel={onCancel}
    onAddCalendar={onAddCalendar}
  />
);

export default AddModal;
