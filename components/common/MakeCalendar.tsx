import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface Props {
  calendar: CalendarType[];
  year: number;
  month: number;
}

const MakeCalendar: React.FC<Props> = ({ calendar, year, month }) => {
  let firstDayOfMonth = new Date(year, month, 1).getDay();
  let endDateOfMonth = new Date(year, month + 1, 0).getDate();
  let calendarDays = [];
  let cnt = 1;

  for (let i = 0; i < 6; i++) {
    var _days = [];
    for (let j = 0; j < 7; j++) {
      if (cnt > endDateOfMonth) {
        _days.push('');
      } else if (firstDayOfMonth > j && i === 0) {
        _days.push('');
      } else {
        _days.push(cnt);
        cnt++;
      }
    }

    calendarDays.push(_days);
  }

  return (
    <>
      {calendarDays.map((week) => (
        <Row key={week.toString()}>
          {week.map((day, idx) => {
            let dateKey =
              year +
              '-' +
              (month < 9 ? '0' + (month + 1) : month + 1) +
              '-' +
              (day < 10 ? '0' + day : day);

            return (
              <div key={idx}>
                <span
                  style={{
                    color:
                      idx === 0 ? '#CE879F' : idx === 6 ? '#CE879F' : '#444078',
                  }}
                >
                  {day}
                </span>

                <DataPane>
                  {calendar.length > 0 &&
                    calendar
                      .filter(
                        (schedule) =>
                          moment(schedule.date).format('YYYY-MM-DD') === dateKey
                      )
                      .sort()
                      .map((data) => (
                        <div key={data.body}>
                          {data.time} {data.body}
                        </div>
                      ))}
                </DataPane>
              </div>
            );
          })}
        </Row>
      ))}
    </>
  );
};

const Row = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  & div {
    width: 100%;
    height: 100%;
    font-weight: 600;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  & span {
    margin: 3px 0 0 3px;
    font-size: 0.8em;
  }
`;

const DataPane = styled.span`
  width: 100%;
`;

export default MakeCalendar;
