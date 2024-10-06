//get start and end date from global state. get cabin id from props and get time slots from api
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {TimeSlotsContainer, ButtonTimeSlot, TimeSlotsSubContainer, MobileViewMoreContainer, SubmitTimeSlotsButton, LaptopDeviceSubmitContainer, LaptopDeviceSubmitButton} from './timeSlotsStyled'
import ButtonTimeSlotComponent from '../ButtonTimeSlot'
import WhoBookedTheSlot from '../WhoBookedTheSlot'
import {AppDispatch} from '../../Redux/store'
import ResultScreen from '../SuccessAndFailure'
import ConfirmSlotPopUpComponent from '../ConfirmSlotsPopUp'
import { url, useCabinData} from '../../Utils'
import Cookies from 'js-cookie'
import { AnimatePresence } from 'framer-motion'

interface TimeSlotsProps{
    cabinId: string,
    floor: string,
    cabinDetails: CabinInterface
}

interface CabinInterface {
  cabin_id: string,
  cabin_name: string,
  cabin_type: string,
  description: string
}

interface TimeSlotsArr{
    slot: string
    availability: boolean
}

interface TimeSlotsInterface{
    cabin_id: string,
    time_slots: TimeSlotsArr[]
}

interface TimeSlotsObj{
    time_string: string,
    availability: boolean
}

const TimeSlots: React.FC<TimeSlotsProps> = ({cabinId, floor, cabinDetails})=>{
    const [timeSlots, setTimeSlots] = useState<TimeSlotsObj[]>()
    const [showAllSlots, setShowAllSlots] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedSlots, setSelectedSlots] = useState<string[]>([])
    const [numberOfSlots, setNumberOfSlots] = useState(4)
    const {allTheCabinIds, startdate, endDate} = useCabinData()
    const [confirmSlotPopUp, setConfirmSlotPopUp] = useState(false)
    const [slotBooked, setSlotBooked] = useState(false)
    const [whoBookedTheSlot, setWhoBookedTheSlot] = useState(false)
    const [ResultPopUp, setResultPopUp] = useState<boolean | null>(null)
    const [bookedTimeString, setBookedTimeString] = useState('')

    const dispatch = useDispatch<AppDispatch>()

    const convertTo12HourFormat = (timeString: string)=>{
        let hours: string = timeString.split(':')[0]
        const period = parseInt(hours) >= 12 ? 'PM' : 'AM'
        let hourTime = parseInt(hours) % 12 || 12
        let a = `${hourTime < 10 ? '0' : ''}${hourTime}:${timeString.split(':')[1]} ${period}`
        return a
    }

    function convertTo24HourFormat(time: string) {
        const [timePart, modifier] = time.split(' ');
        let [hours, minutes] = timePart.split(':');
        let a = parseInt(hours, 10);
        let b = parseInt(minutes, 10);

        if (modifier === 'PM' && a < 12) {
            a += 12;
        } else if (modifier === 'AM' && a === 12) {
            a = 0;
        }

      const formattedHours = String(a).padStart(2, '0');
      const formattedMinutes = String(b).padStart(2, '0');
  
      return `${formattedHours}:${formattedMinutes}`;
  }

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
            try{
              const bodyData = {
                "cabin_ids": [cabinId],
                "start_date": startdate,
                "end_date": endDate
              }

              const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${Cookies.get("access_token")}`
                },
                body: JSON.stringify(bodyData)
              }
              const response = await fetch(`${url}/get/cabin_slots/v1`, options)
              const data = await response.json()

              
              setSelectedSlots([])

              if(response.status === 200){
                const filteredData = data.filter((data: TimeSlotsInterface)=> data.cabin_id === cabinId)
                if(filteredData.length === 0){
                  setTimeSlots([])
                }else{
                  const updatedData = filteredData[0].time_slots.map((data: TimeSlotsArr)=>{
                      const timeString = convertTo12HourFormat(data.slot)
                      return {availability: data.availability, time_string: timeString}
                  })
                  setTimeSlots(updatedData)
                }
                
              }else{
                console.log("Error")
              }
            }catch(e){
              console.log(e)
            }
        }

        fetchCabinDetails()

        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
          if(window.innerWidth <= 385){
            setNumberOfSlots(3)
          }else{
            setNumberOfSlots(4)
          }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };

    },[cabinId, allTheCabinIds, startdate, endDate, slotBooked])

    const handleToggleSelect = (timeString: string, availability: boolean)=>{
      if(selectedSlots.includes(timeString) && availability === true){
        setSelectedSlots(selectedSlots.filter((time)=> time !== timeString))
      }else{
          if(!selectedSlots.includes(timeString) && availability === true){
            setSelectedSlots([...selectedSlots, timeString])
          }else{
            setWhoBookedTheSlot(!whoBookedTheSlot)
            const a = convertTo24HourFormat(timeString)
            console.log(a)
            setBookedTimeString(a)
          }
      }
    }

    const toogleConfirmSlotPopUp = ()=>{
      setConfirmSlotPopUp(!confirmSlotPopUp)
    }

    const confirmSlots = ()=>{
      toogleConfirmSlotPopUp()
    }

    const selectedSlotsUpdate = ()=>{
      setSelectedSlots([])
    }

    return (
      <>
        <TimeSlotsContainer data-testid = "time slots" data-cabinId = {cabinId}>
            <TimeSlotsSubContainer>
              {timeSlots?.slice(0, showAllSlots || !isMobile ? timeSlots?.length : numberOfSlots).map((timeSlot)=>{
                  return (
                    <ButtonTimeSlotComponent key = {timeSlot.time_string}  handleToggleSelect={handleToggleSelect} timeSlot = {timeSlot} isSelected={selectedSlots.includes(timeSlot.time_string)}/>
                  )
              })} 
            </TimeSlotsSubContainer>            
            {isMobile ? <MobileViewMoreContainer>
              <p onClick={()=>setShowAllSlots(!showAllSlots)}>{showAllSlots ? "Show less" : "Show more"}</p>
              {selectedSlots.length > 0 && <SubmitTimeSlotsButton onClick={confirmSlots}>Confirm</SubmitTimeSlotsButton>}
            </MobileViewMoreContainer>: null}
        </TimeSlotsContainer>
        {!isMobile && selectedSlots.length >= 0 && <LaptopDeviceSubmitContainer>
          <LaptopDeviceSubmitButton disabled = {selectedSlots.length === 0} showbutton = {selectedSlots.length > 0} onClick={confirmSlots}>Confirm</LaptopDeviceSubmitButton>
        </LaptopDeviceSubmitContainer>}
        <AnimatePresence mode = "wait" initial = {false} onExitComplete={()=> null}>
            {confirmSlotPopUp && <ConfirmSlotPopUpComponent name = {cabinDetails.cabin_name} floor = {floor} resultPopUp = {(value: boolean)=> setResultPopUp(value)} slotsBookedFunction = {()=> setSlotBooked(!slotBooked)} toogleConfirmSlotPopUp = {toogleConfirmSlotPopUp} selectedSlotsUpdate = {selectedSlotsUpdate} selectedSlots = {selectedSlots} cabinId = {cabinId}/>}
        </AnimatePresence>
        <AnimatePresence mode = "wait" initial = {false} onExitComplete={()=> null}>
            {ResultPopUp === null ? null : <ResultScreen changeErrorToUndefined = {()=> setResultPopUp(null)} result = {ResultPopUp} />}
        </AnimatePresence>
        <AnimatePresence mode = "wait" initial = {false} onExitComplete={()=> null}>
          {whoBookedTheSlot && <WhoBookedTheSlot floor = {floor} name = {cabinDetails.cabin_name} cabinId = {cabinId} timeSlot = {bookedTimeString} closePopUp = {()=> setWhoBookedTheSlot(false)}/>}
        </AnimatePresence>
        </>
    )
}

export default TimeSlots