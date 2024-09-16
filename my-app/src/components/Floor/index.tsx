import {useState, useEffect } from 'react'
import {FloorContainer} from './cabinStyled'
import FloorItem from '../FloorItem'

interface CabinInterface {
    cabin_id: string,
    name: string,
    cabin_type: string,
    description: string
}

interface MainFloorInterface {
    floor: string,
    cabins: CabinInterface[]
}

const details: MainFloorInterface[] = [
    {
      "floor": "Ground Floor",
      "cabins": [
        {
          "cabin_id": "1",
          "name": "Conference Room",
          "cabin_type": "Conference Room",
          "description": "Sufficient for 25 people",
        }
      ]
    },
    {
        "floor": "First Floor",
        "cabins": [
          {
            "cabin_id": "2",
            "name": "Conference Room",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 25 people",
          }
        ]
      },
      {
        "floor": "Fourth Floor",
        "cabins": [
          {
            "cabin_id": "3",
            "name": "Conference Room",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 87 people (EW)",
          },
          {
            "cabin_id": "4",
            "name": "Call Pod 3a",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 54 people (EW)",
          },
          {
            "cabin_id": "5",
            "name": "Call Pod 3b",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 1 people (EW)",
          },
          {
            "cabin_id": "6",
            "name": "Call Pod 3c",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 250 people (EW)",
          },
          {
            "cabin_id": "7",
            "name": "Call Pod 3d",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 215 people (EW)",
          },
          {
            "cabin_id": "8",
            "name": "Call Pod 3e",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 215 people (EW)",
          }
        ]
      },
      // {
      //   "floor": "Fifth Floor",
      //   "cabins": [
      //     {
      //       "cabin_id": "1",
      //       "name": "Conference Room",
      //       "cabin_type": "Conference Room",
      //       "description": "Sufficient for 25 people",
      //     }
      //   ]
      // }
  ]

const Cabin = ()=>{
    const [cabinDetails, setCabinDetails] = useState<MainFloorInterface[] | null>()

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
            //instead of a promise make an api call here
            const promise = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve("Cabin Details")
                    setCabinDetails(details)
                }, 1000)
            })

            await promise
        }

        fetchCabinDetails()
    },[])

    return (
        <FloorContainer>
            {cabinDetails?.map((floor)=>{
                return (
                    <FloorItem key = {floor.floor} floor = {floor.floor} cabins = {floor.cabins}/>
                )
            })}
        </FloorContainer>
    )
}

export default Cabin