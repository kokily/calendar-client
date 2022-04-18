import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  cyan?: boolean;
}

interface Props {
  onCancel: () => void;
  onAddCalendar: () => void;
}

const AddButtons: React.FC<Props> = ({ onCancel, onAddCalendar }) => (
  <Container>
    <Button onClick={onCancel}>취소</Button>
    <Button cyan onClick={onAddCalendar}>
      저장
    </Button>
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button<ButtonProps>`
  width: 5rem;
  height: 2rem;
  border: none;
  background: #868e96;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;
  cursor: pointer;
  ${(props) =>
    props.cyan &&
    css`
      background: #15aabf;
      &:hover {
        color: #15aabf;
      }
    `}
  &:hover {
    background: #dee2e6;
    color: #343a40;
  }
  & + & {
    margin-left: 0.75rem;
  }
`;

export default AddButtons;
