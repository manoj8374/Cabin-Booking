import {WhoBookedTheSlotContainer,HeadingElement, WhoBookedTheSlotSubContainer, RxCross2Element,DateParaElement, WhoBookedTheSlotFormMainContainer, WhoBookedTheSlotHeadingContainer, WhoBookedTheSlotFormContainer, WhoBookedTheSlotInputFieldContainer, WhoBookedTheSlotInputField, LabelElement, BookedContainer, BookedContainerHeading, CloseButton} from './whoBookedStyled'
import { useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from '../../Redux/store'
import {setPopUpClosed} from '../../Redux/whobookedslice'
import { useEffect } from 'react'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";


const WhoBookedTheSlot = ()=>{
    const cabinId = useSelector((state: RootState) => state.whobooked.cabinId)
    const timeSlot = useSelector((state: RootState) => state.whobooked.timeSlot)
    const isClicked = useSelector((state: RootState) => state.whobooked.isClicked)
    const dispatch = useDispatch<AppDispatch>()

    const closePopUp = ()=>{
        dispatch(setPopUpClosed({isClicked: false}))
        // document.body.style.overflow = 'hidden';
    }

    useEffect(()=>{
        // document.body.style.overflow = 'hidden';
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
                                <LabelElement>Email</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = "manoj@nxtwave.com"/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Contact Number</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = "9876543210"/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <BookedContainer>
                                <BookedContainerHeading>
                                    Booked from
                                </BookedContainerHeading>
                                <DateParaElement>Date - 05/08/2024   to   06/08/2024</DateParaElement>
                            </BookedContainer>
                            <CloseButton onClick = {closePopUp} >
                                Close
                            </CloseButton>
                        </WhoBookedTheSlotFormContainer>
                    </WhoBookedTheSlotFormMainContainer>
                </WhoBookedTheSlotSubContainer>
            </WhoBookedTheSlotContainer>
        </>
    )
}

export default WhoBookedTheSlot