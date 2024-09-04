//get start and end date from global state. get cabin id from props and get time slots from api
import {useEffect, useState} from 'react'
import {TimeSlotsContainer, ButtonTimeSlot} from './timeSlotsStyled'

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
      "cabin_id": "1",
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
        "cabin_id": "2",
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
        "cabin_id": "3",
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
        "cabin_id": "4",
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
    console.log(cabinId, "pichihih iasdfi")
    const [timeSlots, setTimeSlots] = useState<TimeSlotsObj[]>()
    useEffect(()=>{
        console.log("qwerty")
        const fetchCabinDetails = async ()=>{
            //instead of a promise make an api call here
            const getTimeSlots = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve("TimeSlots")
                    const filteredData = sampleTimeSlotsData.filter((data)=> data.cabin_id === cabinId)
                    console.log(filteredData, "filtered data", cabinId)
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
    },[cabinId])

    return (
        <TimeSlotsContainer>
            {timeSlots?.map((timeSlot)=>(
                <ButtonTimeSlot isavailable = {timeSlot.availability}>{timeSlot.time_string}</ButtonTimeSlot>
            ))}    
        </TimeSlotsContainer>
    )
}

export default TimeSlots