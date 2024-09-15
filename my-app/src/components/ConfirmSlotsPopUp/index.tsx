import {WhoBookedTheSlotContainer,HeadingElement, WhoBookedTheSlotSubContainer, RxCross2Element,DateParaElement, WhoBookedTheSlotFormMainContainer, WhoBookedTheSlotHeadingContainer, WhoBookedTheSlotFormContainer, WhoBookedTheSlotInputFieldContainer, WhoBookedTheSlotInputField, LabelElement, BookedContainer, BookedContainerHeading, CloseButton} from './confirmslotsstyled'
import {SelectedTimeSlotsContainer, ButtonsContainer, ConfirmTimeSlotsContainer, SlotItem, BookButton, CancelButton, PurposeContainer} from './confirmslotsstyled'
import { useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from '../../Redux/store'
import {ConfirmSlotPopUp} from '../../Redux/confirmslotsslice'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";


const ConfirmSlotPopUpComponent = ()=>{
    const dispatch = useDispatch<AppDispatch>()
    const slots = useSelector((state: RootState) => state.confirmSlots.slots)

    const [timeSlots, setTimeSlots] = useState<string[]>([])

    const closePopUp = ()=>{
        dispatch(ConfirmSlotPopUp({isClicked: false}))
        // document.body.style.overflow = 'hidden';
    }

    useEffect(()=>{
        setTimeSlots(slots)
    }, [])
    return(
        <>
            <WhoBookedTheSlotContainer>
                <WhoBookedTheSlotSubContainer>
                    <WhoBookedTheSlotFormMainContainer>
                        <WhoBookedTheSlotHeadingContainer>
                            <HeadingElement>Ground Floor Conference Room</HeadingElement>
                            <RxCross2Element onClick = {closePopUp} />
                        </WhoBookedTheSlotHeadingContainer>
                        <WhoBookedTheSlotFormContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Booked by</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = "Venu Gopal"/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Team</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = "NIAT"/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Contact Number</LabelElement>
                                <WhoBookedTheSlotInputField value = "9876543210"/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Purpose</LabelElement>
                                <PurposeContainer rows={5} cols={10} placeholder='Enter Purpose'/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <BookedContainer>
                                <BookedContainerHeading>
                                    Selected Date
                                </BookedContainerHeading>
                                <DateParaElement>Date - 05/08/2024   to   06/08/2024</DateParaElement>
                            </BookedContainer>
                            <SelectedTimeSlotsContainer>
                                <BookedContainerHeading>
                                    Selected Time slots
                                </BookedContainerHeading>
                                <ConfirmTimeSlotsContainer>
                                    {timeSlots.map((slot)=>{
                                        return <SlotItem>{slot}</SlotItem>
                                    })}
                                </ConfirmTimeSlotsContainer>
                            </SelectedTimeSlotsContainer>
                            <ButtonsContainer>
                                <CancelButton onClick = {closePopUp} >
                                    Cancel
                                </CancelButton>
                                <BookButton>Confirm</BookButton>
                            </ButtonsContainer>
                        </WhoBookedTheSlotFormContainer>
                    </WhoBookedTheSlotFormMainContainer>
                </WhoBookedTheSlotSubContainer>
            </WhoBookedTheSlotContainer>
        </>
    )
}

export default ConfirmSlotPopUpComponent