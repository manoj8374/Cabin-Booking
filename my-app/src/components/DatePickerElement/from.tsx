import React, { useState, useRef} from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import {DateElement} from '../DatePicker/DatePickerStyled'
import "./custom-datepicker.css";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface MyDatePickerProps {
    openCalendar: () => void;
    ref: React.RefObject<any>;
  }

const StyledInput = styled.p`
  border: none;
  border-radius: 4px;
  background: transparent;
  font-size: 24px;
  color: black;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledDatePickerWrapper = styled.div`
.react-datepicker__triangle {
    
    border: none;
  }
.react-datepicker__navigation{
    width: 24px;
    height: 24px;
    margin-top: 10px;
}

    .react-datepicker__header {
        border-bottom: none;
        display: flex;
        gap: 8px;
    background-color: white; /* Change header background color */
  }


  .react-datepicker-popper {
    left: 0px !important; /* Override the left property */
    border: none;
    @media (max-width: 768px) {
      left: 10px !important;
    }

    @media (max-width: 576px) {
        left: 50px !important;
      }
  }

  .react-datepicker {
    font-size: 14px; /* Default font size for larger screens */
    
  }
  
  .react-datepicker__header {
    padding-top: 8px;
    font-size: 16px;
  }

  .react-datepicker__day {
    width: 2rem;
    height: 2rem;
    font-size: 14px;

  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    .react-datepicker {
      width: 100%; /* Make sure the calendar fits the mobile screen */
      font-size: 12px; /* Decrease font size for mobile */
    }

    .react-datepicker__header {
      font-size: 14px;
    }

    .react-datepicker__day {
      width: 1.5rem; /* Decrease the size of the day cells */
      height: 1.5rem;
      font-size: 12px;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header {
      font-size: 14px; /* Decrease the header font size */
    }
  }
`;

const DatePickerElementFrom: React.FC<MyDatePickerProps> = ({ openCalendar }) => {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef<DatePicker>(null);

  const formatCustomDate = (date: Date | null) => {
    return date ? format(date, 'd MMM EEE, yyyy') : 'Select a date';
  };

  return (
    <StyledDatePickerWrapper>
        <DatePicker ref={datePickerRef} selected={startDate} onChange={(date) => date !== null && setStartDate(date)} customInput={<StyledInput onClick={() => datePickerRef.current?.setOpen(true)}>{formatCustomDate(startDate)}</StyledInput>} dateFormat="d MMM EEE, yyyy"  />
    </StyledDatePickerWrapper>
  )
};


export default DatePickerElementFrom