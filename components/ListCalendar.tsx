import React from 'react';
import styled from 'styled-components';
import Header from './common/Header';
import Week from './common/Week';

interface Props {
  calendar: CalendarType[];
  monList: string[];
  month: number;
  year: number;
  prevMonth: () => void;
  nextMonth: () => void;
}

const ListCalendar: React.FC<Props> = ({
  calendar,
  monList,
  month,
  year,
  prevMonth,
  nextMonth,
}) => (
  <Container>
    <Header
      calendar={calendar}
      monList={monList}
      month={month}
      year={year}
      prevMonth={prevMonth}
      nextMonth={nextMonth}
    />

    <Week calendar={calendar} year={year} month={month} />

    <Button>추가</Button>
  </Container>
);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  display: flex;
  font-size: 20px;
`;

const Button = styled.button`
  position: fixed;
  z-index: 999;
  right: 6%;
  bottom: 18%;
  width: 18%;
  height: 30px;
  min-width: 80px;
  max-width: 130px;
  margin: auto 0px;
  border: none;
  border-radius: 20px;
  font-size: 0.7em;
  font-weight: 600;
  background-color: #fff;
  color: #4d4887;
  cursor: pointer;
  outline: none;
  box-shadow: 0 1px 2px 0 #777;
  transition: 0.2s all;

  &:active {
    transform: translateY(3px);
  }
`;

export default ListCalendar;
