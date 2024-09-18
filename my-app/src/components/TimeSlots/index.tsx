//get start and end date from global state. get cabin id from props and get time slots from api
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setWhoBooked } from '../../Redux/whobookedslice'
import {ConfirmSlotPopUp} from '../../Redux/confirmslotsslice'
import {TimeSlotsContainer, ButtonTimeSlot, TimeSlotsSubContainer, MobileViewMoreContainer, SubmitTimeSlotsButton, LaptopDeviceSubmitContainer, LaptopDeviceSubmitButton} from './timeSlotsStyled'
import ButtonTimeSlotComponent from '../ButtonTimeSlot'
import WhoBookedTheSlot from '../WhoBookedTheSlot'
import {RootState, AppDispatch} from '../../Redux/store'
import ResultScreen from '../SuccessAndFailure'
import ConfirmSlotPopUpComponent from '../ConfirmSlotsPopUp'


interface TimeSlotsProps{
    cabinId: string
}

interface TimeSlotsArr{
    start_date: string,
    end_date: string,
    availability: boolean
}

interface TimeSlotsInterface{
    cabin_id: string,
    time_slots: TimeSlotsArr[]
}

interface TimeSlotsObj{
    start_date: string,
    end_date: string,
    availability: boolean,
    time_string: string
}

const sampleTimeSlotsData: TimeSlotsInterface[] = [
    {
      "cabin_id": "3ba2eefc-22f5-4f9e-992c-be85ac158c27",
      "time_slots": [
        {
          "start_date": "2024-09-04T00:30:00.664Z",
          "end_date": "2024-09-04T06:00:00.664Z",
          "availability": false
        }
        ,{
            "start_date": "2024-09-04T01:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
          ,{
            "start_date": "2024-09-04T02:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
            "start_date": "2024-09-04T03:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
            "start_date": "2024-09-04T04:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
          ,{
            "start_date": "2024-09-04T05:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
          ,{
            "start_date": "2024-09-04T06:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
          ,{
            "start_date": "2024-09-04T07:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
            "start_date": "2024-09-04T08:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
          ,{
            "start_date": "2024-09-04T09:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
          ,{
            "start_date": "2024-09-04T10:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
            "start_date": "2024-09-04T11:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": true
          }
        
      ]
    },
    {
        "cabin_id": "da009835-759d-40f6-a673-bd8781601a7b",
        "time_slots": [
          {
            "start_date": "2024-09-04T00:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
              "start_date": "2024-09-04T01:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T02:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T03:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T04:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T05:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T06:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T07:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T08:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T09:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T10:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T11:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
          
        ]
      },
      {
        "cabin_id": "5600633e-2a2c-4689-9c9e-9742de6e1687",
        "time_slots": [
          {
            "start_date": "2024-09-04T00:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
              "start_date": "2024-09-04T01:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T02:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T03:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T04:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T05:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T06:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T07:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T08:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T09:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T10:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T11:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
          
        ]
      },
      {
        "cabin_id": "e357a976-10eb-4c4b-b089-a238109a8679",
        "time_slots": [
          {
            "start_date": "2024-09-04T00:30:00.664Z",
            "end_date": "2024-09-04T06:00:00.664Z",
            "availability": false
          }
          ,{
              "start_date": "2024-09-04T01:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T02:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T03:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T04:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T05:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T06:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T07:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T08:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T09:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
            ,{
              "start_date": "2024-09-04T10:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": false
            }
            ,{
              "start_date": "2024-09-04T11:30:00.664Z",
              "end_date": "2024-09-04T06:00:00.664Z",
              "availability": true
            }
          
        ]
      }
  ]

const TimeSlots: React.FC<TimeSlotsProps> = ({cabinId})=>{
    const [timeSlots, setTimeSlots] = useState<TimeSlotsObj[]>()
    const [showAllSlots, setShowAllSlots] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedSlots, setSelectedSlots] = useState<string[]>([])
    const [numberOfSlots, setNumberOfSlots] = useState(4)

    const errorPopUp = useSelector((state: RootState) => state.confirmSlots.error)
    const confirmSlotPopUp = useSelector((state: RootState) => state.confirmSlots.isClicked)
    
    const bookedButtonClicked = useSelector((state: RootState) => state.whobooked.isClicked)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
            //instead of a promise make an api call here
            const getTimeSlots = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve("TimeSlots")
                    const filteredData = sampleTimeSlotsData.filter((data)=> data.cabin_id === cabinId)
                    if(filteredData.length === 0){
                        setTimeSlots([])
                    }else{
                        const updatedData = filteredData[0].time_slots.map((data)=>{
                            const date = new Date(data.start_date)
                            const timeString = date.toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                              });
                            return {...data, time_string: timeString}
                        })
                        setTimeSlots(updatedData)
                    }
                }, 1)
            })

            await getTimeSlots
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

    },[cabinId])

    const handleToggleSelect = (timeString: string, availability: boolean)=>{
      if(selectedSlots.includes(timeString) && availability === true){
        setSelectedSlots(selectedSlots.filter((time)=> time !== timeString))
      }else{
          if(!selectedSlots.includes(timeString) && availability === true){
            setSelectedSlots([...selectedSlots, timeString])
          }else{
            dispatch(setWhoBooked({
              isClicked: true,
              timeSlot: timeString,
              cabinId
            }))
            //open a popup and show the details of the person who booked the slot
            // <WhoBookedTheSlot/>
          }
      }
    }

    const confirmSlots = ()=>{
      console.log(selectedSlots, "selected slots")
      dispatch(ConfirmSlotPopUp({isClicked: true, slots: selectedSlots}))
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
                    <ButtonTimeSlotComponent key = {timeSlot.time_string} handleToggleSelect={handleToggleSelect} timeSlot = {timeSlot} isSelected={selectedSlots.includes(timeSlot.time_string)}/>
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
        {confirmSlotPopUp && <ConfirmSlotPopUpComponent selectedSlotsUpdate = {selectedSlotsUpdate}/>}
        {errorPopUp === undefined ? null : errorPopUp === true ? <ResultScreen error = {true}/> : <ResultScreen error = {false}/>}
        </>
        //display the result popup here
    )
}

export default TimeSlots