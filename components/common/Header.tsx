import React from 'react';
import styled from 'styled-components';

interface Props {
  calendar: CalendarType[];
  monList: string[];
  month: number;
  year: number;
  prevMonth: () => void;
  nextMonth: () => void;
}

const Header: React.FC<Props> = ({ month, year, prevMonth, nextMonth }) => (
  <Container>
    <button onClick={prevMonth}>◀</button>
    <span>
      {year}년 {month + 1}월
    </span>
    <button onClick={nextMonth}>▶</button>
  </Container>
);

// Styles
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 5px 20px;
  box-sizing: border-box;
  font-weight: 600;
  width: 100%;
  height: 14%;
  font-size: 1em;
  & button {
    margin: 0 25px;
    cursor: pointer;
    outline: none;
    display: inline-flex;
    background: transparent;
    border: none;
    color: #444078;
    font-size: 1.2em;
    padding: 4px;
    &:hover {
      color: #fff;
    }
    &:active {
    }
  }
`;

export default Header;
