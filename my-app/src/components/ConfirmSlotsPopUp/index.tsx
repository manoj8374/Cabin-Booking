import {WhoBookedTheSlotContainer,HeadingElement, WhoBookedTheSlotSubContainer, RxCross2Element,DateParaElement, WhoBookedTheSlotFormMainContainer, WhoBookedTheSlotHeadingContainer, WhoBookedTheSlotFormContainer, WhoBookedTheSlotInputFieldContainer, WhoBookedTheSlotInputField, LabelElement, BookedContainer, BookedContainerHeading, CloseButton} from './confirmslotsstyled'
import {SelectedTimeSlotsContainer, ButtonsContainer, ConfirmTimeSlotsContainer, SlotItem, BookButton, CancelButton, PurposeContainer} from './confirmslotsstyled'
import { useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from '../../Redux/store'
import { useEffect, useState } from 'react'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { url, useCabinData } from '../../Utils';
import Cookies from 'js-cookie'

interface ConfirmSlotPopUpProps{
    selectedSlotsUpdate: ()=> void,
    cabinId: string,
    selectedSlots: string[],
    toogleConfirmSlotPopUp: ()=> void,
    slotsBookedFunction: ()=> void,
    resultPopUp: (result: boolean)=> void,
    floor: string,
    name: string
}

const ConfirmSlotPopUpComponent: React.FC<ConfirmSlotPopUpProps> = ({floor, selectedSlotsUpdate, toogleConfirmSlotPopUp, slotsBookedFunction, resultPopUp, selectedSlots, cabinId, name})=>{
    const dispatch = useDispatch<AppDispatch>()
    const {startdate, endDate} = useCabinData();
    const [purpose, setPurpose] = useState('')
    const {first_name, last_name, team_name, contact_number} = useSelector((state: RootState) => state.user)

    const closePopUp = ()=>{
        toogleConfirmSlotPopUp()
    }

    const convertTimeSlots = (timeStr: string)=>{
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = time.split(':');

        if (modifier === 'PM' && hours !== '12') {
            let a = parseInt(hours, 10) + 12;
            hours = a.toString();
        }
        if (modifier === 'AM' && hours === '12') {
            hours = '00';
        }
    
        return `${hours}:${minutes}`;
    }

    const confirm = async(e: any)=>{
        const timeSlotsWithTime = selectedSlots.map((timeSlot)=>{
            return convertTimeSlots(timeSlot)
        })

        try{
            const bodyData = {
                purpose: purpose,
                cabin_id: cabinId,
                start_date: startdate,
                end_date: endDate,
                time_slots: timeSlotsWithTime
            }
    
            const response = await fetch(`${url}/confirm_slots/v1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
                body: JSON.stringify(bodyData)
            })
            const data = await response.json()
            if(response.status === 200){
                slotsBookedFunction()
                resultPopUp(true)
            }else{
                slotsBookedFunction()
                resultPopUp(false)
            }
            selectedSlotsUpdate()
            toogleConfirmSlotPopUp()
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        console.log(selectedSlots, cabinId)
    }, [])

    return(
        <>
            <WhoBookedTheSlotContainer onClick = {closePopUp}>
                <WhoBookedTheSlotSubContainer onClick = {(e)=>{e.stopPropagation()}}>
                    <WhoBookedTheSlotFormMainContainer>
                        <WhoBookedTheSlotHeadingContainer>
                            <HeadingElement>{floor} {name}</HeadingElement>
                            <RxCross2Element onClick = {closePopUp} />
                        </WhoBookedTheSlotHeadingContainer>
                        <WhoBookedTheSlotFormContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Name</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${first_name} ${last_name}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Team</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {team_name}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Contact Number</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {contact_number}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Purpose</LabelElement>
                                <PurposeContainer required rows={5} cols={10} placeholder='Enter Purpose' onChange={(e)=> setPurpose(e.target.value)}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <BookedContainer>
                                <BookedContainerHeading>
                                    Selected Date
                                </BookedContainerHeading>
                                <DateParaElement>Date - {startdate}   to  {endDate}</DateParaElement>
                            </BookedContainer>
                            <SelectedTimeSlotsContainer>
                                <BookedContainerHeading>
                                    Selected Time slots
                                </BookedContainerHeading>
                                <ConfirmTimeSlotsContainer>
                                    {selectedSlots.map((slot)=>{
                                        return <SlotItem>{slot}</SlotItem>
                                    })}
                                </ConfirmTimeSlotsContainer>
                            </SelectedTimeSlotsContainer>
                            <ButtonsContainer>
                                <CancelButton onClick = {closePopUp} >
                                    Cancel
                                </CancelButton>
                                <BookButton onClick = {confirm} type = 'button'>Confirm</BookButton>
                            </ButtonsContainer>
                        </WhoBookedTheSlotFormContainer>
                    </WhoBookedTheSlotFormMainContainer>
                </WhoBookedTheSlotSubContainer>
            </WhoBookedTheSlotContainer>
        </>
    )
}

export default ConfirmSlotPopUpComponent