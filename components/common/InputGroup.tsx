import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

interface Props {
  body: string;
  time: string;
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputGroup: React.FC<Props> = ({
  body,
  time,
  date,
  setDate,
  onChange,
}) => {
  return (
    <Container>
      <DateBox>
        <DatePicker
          locale="ko"
          startDate={new Date()}
          selected={date}
          onChange={setDate as any}
          dateFormat="yyyy, MM dd"
        />
      </DateBox>

      <SelectBox>
        <Select name="time" value={time} onChange={onChange}>
          <option value="11:30">11:30</option>
          <option value="13:00">13:00</option>
          <option value="14:30">14:30</option>
          <option value="16:00">16:00</option>
          <option value="17:30">17:30</option>
        </Select>
      </SelectBox>

      <InputBox>
        <Input
          type="text"
          name="body"
          value={body}
          onChange={onChange}
          required
        />
        <Bar />
        <label>내용 기록</label>
      </InputBox>
    </Container>
  );
};

// Styles
const Container = styled.div`
  background: white;
  padding: 2rem;
  height: auto;
`;

const DateBox = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .react-datepicker-wrapper {
    width: 100%;

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #15aabf;
    }
  }
`;

const SelectBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const Select = styled.select`
  background: #f8f9fa;
  width: 100%;
  padding: 10px;
  padding-left: 0px;
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: 1px solid #15aabf;
  margin-bottom: -1rem;
  cursor: pointer;
  &:focus {
    background: #4c6ef5;
    color: white;
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  label {
    position: absolute;
    color: #212529;
    top: 12px;
    left: 0;
    transition: 0.2s ease all;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #15aabf;
  padding: 10px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -10px;
    font-size: 14px;
    color: #12b886;
  }
  &:focus ~ .bar:before {
    left: 0;
    right: 0;
  }
`;

const Bar = styled.span`
  position: relative;
  display: block;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    right: 50%;
    bottom: 0;
    background: #0c8599;
    height: 3px;
    transition: left 0.2s ease-out, right 0.2s ease-out;
  }
`;

export default InputGroup;
