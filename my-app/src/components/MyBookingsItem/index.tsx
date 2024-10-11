import React from 'react'
import {MyBookingItemContainer, MyBookingItemSubContainer, FloorNameHeading, CabinNameContainer, DateContainer, TimeSlotsContainer, TimeSlotsItemsContainer, DateIconContainer, TimeSlotItem, StartEndDate, DeleteSlotsBtn} from './myBookingItemStyled'
import { LuCalendar } from "react-icons/lu";

interface BookingsObj {
    floorName: string
    cabinName: string
    bookingId: string
    startDate: string
    endDate: string
    timeSlots: string[]
}

interface MyBookingItemProps{
    details: BookingsObj
    upcoming: boolean,
    confirmPopUp?: (bookingId: string) => void
}

const MyBookingItem: React.FC<MyBookingItemProps> = ({details, upcoming, confirmPopUp})=>{
    const {floorName, cabinName, startDate, endDate, timeSlots} = details

    const formatDateRange = (start: string, end: string) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
      
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short' };
      
        const startDayMonth = startDate.toLocaleDateString('en-US', options);
        const endDayMonth = endDate.toLocaleDateString('en-US', options);
      
        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();

        if (startYear !== endYear) {
            return `${startDayMonth} ${startYear} - ${endDayMonth} ${endYear}`;
        }

        // If years are the same, include only one year
        return `${startDayMonth} - ${endDayMonth} ${startYear}`;
        
      }

      const convertTo12HourFormat = (time24: string) => {
            let [hours, minutes] = time24.split(':').map(Number);
            const period = hours >= 12 ? 'PM' : 'AM';
            
            hours = hours % 12 || 12; 
            const hourString = hours < 10 ? `0${hours}` : hours.toString(); 
        
            return `${hourString}:${minutes < 10 ? '0' + minutes : minutes} ${period}`;
      };

    const deleteSlot = ()=>{
        if(confirmPopUp){
            confirmPopUp(details.bookingId)
        }
    }

    return(
        <MyBookingItemContainer>
            <MyBookingItemSubContainer>
                <FloorNameHeading>{floorName}</FloorNameHeading>
                <CabinNameContainer>
                    <p>{cabinName}</p>
                </CabinNameContainer>
                <DateContainer>
                    <DateIconContainer>
                        <LuCalendar size={24}/>
                    </DateIconContainer>
                    <TimeSlotsContainer>
                        <StartEndDate>{formatDateRange(startDate, endDate)}</StartEndDate>
                        <TimeSlotsItemsContainer>
                            {timeSlots.map((slot)=>{
                                return <TimeSlotItem>{convertTo12HourFormat(slot)}</TimeSlotItem>
                            })}
                        </TimeSlotsItemsContainer>
                    </TimeSlotsContainer>
                </DateContainer>
            </MyBookingItemSubContainer>
            {upcoming && <DeleteSlotsBtn onClick={deleteSlot}>Delete</DeleteSlotsBtn>}
        </MyBookingItemContainer>
    )
}

export default MyBookingItem