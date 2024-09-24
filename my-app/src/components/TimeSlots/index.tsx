//get start and end date from global state. get cabin id from props and get time slots from api
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {TimeSlotsContainer, ButtonTimeSlot, TimeSlotsSubContainer, MobileViewMoreContainer, SubmitTimeSlotsButton, LaptopDeviceSubmitContainer, LaptopDeviceSubmitButton} from './timeSlotsStyled'
import ButtonTimeSlotComponent from '../ButtonTimeSlot'
import WhoBookedTheSlot from '../WhoBookedTheSlot'
import {RootState, AppDispatch} from '../../Redux/store'
import ResultScreen from '../SuccessAndFailure'
import ConfirmSlotPopUpComponent from '../ConfirmSlotsPopUp'
import { url, accessToken, useCabinData} from '../../Utils'
import Cookies from 'js-cookie'


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

// const sampleTimeSlotsData: TimeSlotsInterface[] = [
//     {
//       "cabin_id": "3ba2eefc-22f5-4f9e-992c-be85ac158c27",
//       "time_slots": [
//         {
//           "start_date": "2024-09-04T00:30:00.664Z",
//           "end_date": "2024-09-04T06:00:00.664Z",
//           "availability": false
//         }
//         ,{
//             "start_date": "2024-09-04T01:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
//           ,{
//             "start_date": "2024-09-04T02:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//             "start_date": "2024-09-04T03:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//             "start_date": "2024-09-04T04:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
//           ,{
//             "start_date": "2024-09-04T05:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
//           ,{
//             "start_date": "2024-09-04T06:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
//           ,{
//             "start_date": "2024-09-04T07:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//             "start_date": "2024-09-04T08:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
//           ,{
//             "start_date": "2024-09-04T09:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
//           ,{
//             "start_date": "2024-09-04T10:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//             "start_date": "2024-09-04T11:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": true
//           }
        
//       ]
//     },
//     {
//         "cabin_id": "da009835-759d-40f6-a673-bd8781601a7b",
//         "time_slots": [
//           {
//             "start_date": "2024-09-04T00:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//               "start_date": "2024-09-04T01:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T02:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T03:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T04:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T05:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T06:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T07:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T08:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T09:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T10:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T11:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
          
//         ]
//       },
//       {
//         "cabin_id": "5600633e-2a2c-4689-9c9e-9742de6e1687",
//         "time_slots": [
//           {
//             "start_date": "2024-09-04T00:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//               "start_date": "2024-09-04T01:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T02:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T03:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T04:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T05:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T06:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T07:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T08:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T09:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T10:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T11:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
          
//         ]
//       },
//       {
//         "cabin_id": "e357a976-10eb-4c4b-b089-a238109a8679",
//         "time_slots": [
//           {
//             "start_date": "2024-09-04T00:30:00.664Z",
//             "end_date": "2024-09-04T06:00:00.664Z",
//             "availability": false
//           }
//           ,{
//               "start_date": "2024-09-04T01:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T02:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T03:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T04:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T05:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T06:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T07:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T08:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T09:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
//             ,{
//               "start_date": "2024-09-04T10:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": false
//             }
//             ,{
//               "start_date": "2024-09-04T11:30:00.664Z",
//               "end_date": "2024-09-04T06:00:00.664Z",
//               "availability": true
//             }
          
//         ]
//       }
//   ]

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

    console.log(cabinDetails)
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
        console.log(hours, minutes)
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
        <TimeSlotsContainer>
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
          <LaptopDeviceSubmitButton onClick={confirmSlots}>Confirm</LaptopDeviceSubmitButton>
        </LaptopDeviceSubmitContainer>}
        {confirmSlotPopUp && <ConfirmSlotPopUpComponent name = {cabinDetails.cabin_name} floor = {floor} resultPopUp = {(value: boolean)=> setResultPopUp(value)} slotsBookedFunction = {()=> setSlotBooked(!slotBooked)} toogleConfirmSlotPopUp = {toogleConfirmSlotPopUp} selectedSlotsUpdate = {selectedSlotsUpdate} selectedSlots = {selectedSlots} cabinId = {cabinId}/>}
        {ResultPopUp === null ? null : <ResultScreen changeErrorToUndefined = {()=> setResultPopUp(null)} result = {ResultPopUp}/>}
        {whoBookedTheSlot && <WhoBookedTheSlot floor = {floor} name = {cabinDetails.cabin_name} cabinId = {cabinId} timeSlot = {bookedTimeString} closePopUp = {()=> setWhoBookedTheSlot(false)}/>}
        </>
    )
}

export default TimeSlots