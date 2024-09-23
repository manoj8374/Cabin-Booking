import {WhoBookedTheSlotContainer,HeadingElement, WhoBookedTheSlotSubContainer, RxCross2Element,DateParaElement, WhoBookedTheSlotFormMainContainer, WhoBookedTheSlotHeadingContainer, WhoBookedTheSlotFormContainer, WhoBookedTheSlotInputFieldContainer, WhoBookedTheSlotInputField, LabelElement, BookedContainer, BookedContainerHeading, CloseButton} from './whoBookedStyled'
import { useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from '../../Redux/store'
import { useEffect, useState} from 'react'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { url, useCabinData} from '../../Utils'
import Cookies from 'js-cookie'
import { get } from 'http'
import { set } from 'date-fns'


interface WhoBookedTheSlots {
    closePopUp: ()=> void,
    cabinId: string,
    timeSlot: string
}

const WhoBookedTheSlot: React.FC<WhoBookedTheSlots> = ({closePopUp, timeSlot, cabinId})=>{

    const dispatch = useDispatch<AppDispatch>()
    let {startdate, endDate} = useCabinData();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('') 
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [teamName, setTeamName] = useState('')

    const closePopUpWindow = ()=>{
        closePopUp()
        // document.body.style.overflow = 'hidden';
    }

    useEffect(()=>{
        const getDetails = async ()=>{
            setFirstName("")
            setLastName("")
            setEmail("")
            setContactNumber("")
            setTeamName("")
            try{
                let endTimeSlot = `${String(parseInt(timeSlot.split(":")[0]) + 1).padStart(2, '0')}:00`
                if(endTimeSlot == "24:00"){
                    endTimeSlot = "00:00"
                    const initialDate = new Date(endDate).getDate() + 1
                    const month = String(new Date(endDate).getMonth() + 1) .length == 1 ? "0" + String(new Date(endDate).getMonth() + 1) : String(new Date(endDate).getMonth() + 1)
                    endDate = new Date(endDate).getFullYear() + "-" + month  + "-" + initialDate
                }
                console.log(endDate, endTimeSlot)
                const response = await fetch(`${url}/user/booked_slots/v1`,{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${Cookies.get('access_token')}`
                    },
                    body: JSON.stringify({
                        cabin_id: cabinId,
                        start_date_time: `${startdate} ${timeSlot}`,
                        end_date_time: `${endDate} ${endTimeSlot}`
                    })
                })
                const data = await response.json()
                if(response.status === 200){
                    setFirstName(data.first_name)
                    setLastName(data.last_name)
                    setEmail(data.email)
                    setContactNumber(data.contact_number)
                    setTeamName(data.team_name)
                }
            }catch(e){
                console.log(e)
            }
        }

        getDetails()
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
                                <WhoBookedTheSlotInputField disabled value = {`${firstName} ${lastName}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Team</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${teamName}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Email</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${email}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Contact Number</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${contactNumber}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <CloseButton onClick = {closePopUpWindow} >
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