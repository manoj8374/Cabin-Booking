//get start and end date from global state. get cabin id from props and get time slots from api
import {useEffect, useState} from 'react'

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

const sampleTimeSlotsData: TimeSlotsInterface[] = [
    {
      "cabin_id": "1",
      "time_slots": [
        {
          "start_date": "2024-09-04T05:35:05.664Z",
          "end_date": "2024-09-04T05:35:05.664Z",
          "availability": true
        }
      ]
    }
  ]

const TimeSlots: React.FC<TimeSlotsProps> = ({cabinId})=>{
    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
            //instead of a promise make an api call here
            const getTimeSlots = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve("TimeSlots")
                }, 1000)
            })

            await getTimeSlots
        }
    },[])

    console.log(cabinId)
    return (
        <div>
            TimeSlots    
        </div>
    )
}

export default TimeSlots