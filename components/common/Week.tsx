import React from 'react';
import styled from 'styled-components';
import MakeCalendar from './MakeCalendar';

interface Props {
  calendar: CalendarType[];
  year: number;
  month: number;
}

const Week: React.FC<Props> = ({ calendar, year, month }) => {
  return (
    <Container>
      <Day>
        <div>일요일</div>
        <div>월요일</div>
        <div>화요일</div>
        <div>수요일</div>
        <div>목요일</div>
        <div>금요일</div>
        <div>토요일</div>
      </Day>

      <MakeCalendar calendar={calendar} year={year} month={month} />
    </Container>
  );
};

// Styles
const Container = styled.div`
  background-color: #fff;
  width: 93%;
  height: 81%;
  padding: 8px 10px;
  box-sizing: border-box;
  color: #787c9c;
  margin: 0;
  border-radius: 5px;
  font-size: 0.8em;
`;

const Day = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  & div {
    min-width: 13%;
    max-height: 5%;
    text-align: center;
    font-weight: 600;
    box-sizing: border-box;
  }
`;

export default Week;
