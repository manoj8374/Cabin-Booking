import React, { useState, useRef, useEffect} from "react";
import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import {DateElement} from '../DatePicker/DatePickerStyled'
import "./custom-datepicker.css";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {useCabinData} from '../../Utils'
import {useDispatch, useSelector} from "react-redux";
import { AppDispatch } from "../../Redux/store";
import {setStartDate, setEndDate, setCabinIds} from "../../Redux/CabinSlice";

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

const DatePickerElementFrom = () => {
  const [startDate, changeStartDate] = useState(new Date());
  const datePickerRef = useRef<DatePicker>(null);

  const {updateStartDate, endDate} = useCabinData()
  const dispatch = useDispatch<AppDispatch>()

  const formatCustomDate = (date: Date | null) => {
    return date ? format(date, 'd MMM EEE, yyyy') : 'Select a date';
  };

  const updateDate = (date: Date | null)=>{
    if (date !== null) {
      const endDateObj = formatCustomDate(new Date(endDate))
      const currentDateObj = formatCustomDate(new Date())
      changeStartDate(date)
      dispatch(setStartDate({ startDate: format(date, 'yyyy-MM-dd') }))
    }
  }

  useEffect(() => {
      dispatch(setStartDate({ startDate: format(new Date(), 'yyyy-MM-dd') }))
  },[])

  return (
    <StyledDatePickerWrapper>
        <DatePicker minDate={new Date()} maxDate={new Date(endDate)} ref={datePickerRef} selected={startDate} onChange={updateDate} customInput={<StyledInput onClick={() => datePickerRef.current?.setOpen(true)}>{formatCustomDate(startDate)}</StyledInput>} dateFormat="d MMM EEE, yyyy"  />
    </StyledDatePickerWrapper>
  )
};


export default DatePickerElementFrom