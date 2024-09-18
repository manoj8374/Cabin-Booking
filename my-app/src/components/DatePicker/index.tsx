import { useRef } from "react";
import {DatePickerContainer, DatePickerSubContainer, DateFromContainer, CalenderIcon, DateContentsContainer, HeadingElement, DateElement, HyphenIcon} from './DatePickerStyled'
import DatePickerElement from '../DatePickerElement'
import DatePickerElementFrom from '../DatePickerElement/from'

const DatePickerComponent = ()=>{


    return(
        <DatePickerContainer>
            <DatePickerSubContainer>
                <DateFromContainer>
                    <CalenderIcon/>
                    <DateContentsContainer>
                        <HeadingElement>
                            From
                        </HeadingElement>
                        <DatePickerElementFrom/>
                    </DateContentsContainer>
                </DateFromContainer>
                <HyphenIcon/>
                <DateFromContainer>
                    <DateContentsContainer>
                        <HeadingElement>
                            To
                        </HeadingElement>
                        {/* <DateElement>
                        5 Aug Mon, 2024
                        </DateElement> */}
                        <DatePickerElement />
                    </DateContentsContainer>
                </DateFromContainer>
            </DatePickerSubContainer>
        </DatePickerContainer>
    )
}

export default DatePickerComponent