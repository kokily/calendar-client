import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import React from 'react';
import styled from 'styled-components';
import { shadow } from '../../styles';
import AddButtons from './AddButtons';
import InputGroup from './InputGroup';

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
}) => {
  if (!visible) return null;

  return (
    <Container>
      <Content>
        <h2>{title}</h2>

        <InputGroup
          body={body}
          time={time}
          date={date}
          setDate={setDate}
          onChange={onChange}
        />

        <AddButtons onCancel={onCancel} onAddCalendar={onAddCalendar} />
      </Content>
    </Container>
  );
};

// Styles
const Container = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 slideUpFromBottom;
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }

  @keyframes slideUpFromBottom {
    0% {
      transform: translateY(70%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default AddModal;
