import { useRef } from "react";
import {DatePickerContainer, DatePickerSubContainer, DateFromContainer, CalenderIcon, DateContentsContainer, HeadingElement, DateElement, HyphenIcon} from './DatePickerStyled'
import DatePickerElement from '../DatePickerElement'
import DatePickerElementFrom from '../DatePickerElement/from'

const DatePickerComponent = ()=>{
    const datePickerRef = useRef<any>(null); // Ref to access DatePicker instance

  const handleDivClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true); // Open the calendar on div click
    }
    };

    return(
        <DatePickerContainer>
            <DatePickerSubContainer>
                <DateFromContainer>
                    <CalenderIcon/>
                    <DateContentsContainer>
                        <HeadingElement>
                            From
                        </HeadingElement>
                        <DatePickerElementFrom ref={datePickerRef} openCalendar={() => datePickerRef.current?.setOpen(true)}/>
                    </DateContentsContainer>
                </DateFromContainer>
                <HyphenIcon/>
                <DateFromContainer onClick={handleDivClick}>
                    <DateContentsContainer>
                        <HeadingElement>
                            To
                        </HeadingElement>
                        {/* <DateElement>
                        5 Aug Mon, 2024
                        </DateElement> */}
                        <DatePickerElement ref={datePickerRef} openCalendar={() => datePickerRef.current?.setOpen(true)}/>
                    </DateContentsContainer>
                </DateFromContainer>
            </DatePickerSubContainer>
        </DatePickerContainer>
    )
}

export default DatePickerComponent