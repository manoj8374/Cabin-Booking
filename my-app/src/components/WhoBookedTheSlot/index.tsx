import {WhoBookedTheSlotContainer,HeadingElement, WhoBookedTheSlotSubContainer, RxCross2Element,DateParaElement, WhoBookedTheSlotFormMainContainer, WhoBookedTheSlotHeadingContainer, WhoBookedTheSlotFormContainer, WhoBookedTheSlotInputFieldContainer, WhoBookedTheSlotInputField, LabelElement, BookedContainer, BookedContainerHeading, CloseButton, LoadingAndErrorContainer, RetryButton} from './whoBookedStyled'
import { useSelector, useDispatch} from 'react-redux'
import {RootState, AppDispatch} from '../../Redux/store'
import { useEffect} from 'react'
import {useCabinData} from '../../Utils'
import {getUserDetails} from '../../Redux/whobookedtheslotslice'
import LoadingComponent from '../LoadingView';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0vh",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 35,
            stiffness: 300
        }
    }, 
    exit: {
        y: "100vh",
        opacity: 0
    }
}

interface WhoBookedTheSlots {
    closePopUp: ()=> void,
    cabinId: string,
    timeSlot: string,
    name: string,
    floor: string
}

const WhoBookedTheSlot: React.FC<WhoBookedTheSlots> = ({closePopUp, timeSlot, cabinId, name, floor})=>{

    const dispatch = useDispatch<AppDispatch>()
    const {data, isLoading, error} = useSelector((state: RootState) => state.whobookedtheslot)

    const {first_name, last_name, email, contact_number, team_name} = data

    let {startdate, endDate} = useCabinData();

    const closePopUpWindow = ()=>{
        closePopUp()
    }

    useEffect(()=>{
            let endTimeSlot = `${String(parseInt(timeSlot.split(":")[0]) + 1).padStart(2, '0')}:00`
            if(endTimeSlot == "24:00"){
                endTimeSlot = "00:00"
                let initialDate = new Date(endDate).getDate()
                initialDate = initialDate + 1
                const month = String(new Date(endDate).getMonth() + 1) .length == 1 ? "0" + String(new Date(endDate).getMonth() + 1) : String(new Date(endDate).getMonth() + 1)
                endDate = new Date(endDate).getFullYear() + "-" + month  + "-" + initialDate
                console.log(endDate)
            }

            const body = {
                cabin_id: cabinId,
                start_date_time: `${startdate} ${timeSlot}`,
                end_date_time: `${endDate} ${endTimeSlot}`
            }

            dispatch(getUserDetails(body))

            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape") {
                    closePopUp()
                }
            }

            document.addEventListener("keydown", handleEscape)

            return ()=>{
                document.removeEventListener("keydown", handleEscape)
            }
    }, [])

    const renderInfo = ()=>{
        if(isLoading){
            return (
            <LoadingAndErrorContainer>
                <LoadingComponent/>
            </LoadingAndErrorContainer>
        )
        }

        if(error){
            return (
                <LoadingAndErrorContainer>
                    <h3>Something went wrong please try again later</h3>
                    <RetryButton onClick={closePopUp}>Close</RetryButton>
                </LoadingAndErrorContainer>
            )
        }

        return (
            <WhoBookedTheSlotFormMainContainer>
                        <WhoBookedTheSlotHeadingContainer>
                            <HeadingElement>{floor} {name}</HeadingElement>
                            <RxCross2Element onClick = {closePopUp} />
                        </WhoBookedTheSlotHeadingContainer>
                        <WhoBookedTheSlotFormContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Booked by</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${first_name} ${last_name}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Team</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${team_name}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Email</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${email}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <WhoBookedTheSlotInputFieldContainer>
                                <LabelElement>Contact Number</LabelElement>
                                <WhoBookedTheSlotInputField disabled value = {`${contact_number}`}/>
                            </WhoBookedTheSlotInputFieldContainer>
                            <CloseButton onClick = {(e)=> {e.preventDefault(); closePopUpWindow()}} >
                                Close
                            </CloseButton>
                        </WhoBookedTheSlotFormContainer>
                    </WhoBookedTheSlotFormMainContainer>
        )
    }
    
    return(
        <>
            <WhoBookedTheSlotContainer onClick = {closePopUpWindow} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                <WhoBookedTheSlotSubContainer onClick={(e)=> e.stopPropagation()} variants={dropIn} initial="hidden" animate="visible" exit="exit">
                    {renderInfo()}
                </WhoBookedTheSlotSubContainer>
            </WhoBookedTheSlotContainer>
        </>
    )
}

export default WhoBookedTheSlot