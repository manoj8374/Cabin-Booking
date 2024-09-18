import {useState, useEffect } from 'react'
import {FloorContainer} from './cabinStyled'
import FloorItem from '../FloorItem'
import {url} from '../../Constants'
import Cookies from 'js-cookie'

interface CabinInterface {
    cabin_id: string,
    cabin_name: string,
    cabin_type: string,
    description: string
}

interface MainFloorInterface {
    floor_name: string,
    cabins: CabinInterface[]
}

const details: MainFloorInterface[] = [
    {
      "floor_name": "Ground Floor",
      "cabins": [
        {
          "cabin_id": "1",
          "cabin_name": "Conference Room",
          "cabin_type": "Conference Room",
          "description": "Sufficient for 25 people",
        }
      ]
    },
    {
        "floor_name": "First Floor",
        "cabins": [
          {
            "cabin_id": "2",
            "cabin_name": "Conference Room",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 25 people",
          }
        ]
      },
      {
        "floor_name": "Fourth Floor",
        "cabins": [
          {
            "cabin_id": "3",
            "cabin_name": "Conference Room",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 87 people (EW)",
          },
          {
            "cabin_id": "4",
            "cabin_name": "Call Pod 3a",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 54 people (EW)",
          },
          {
            "cabin_id": "5",
            "cabin_name": "Call Pod 3b",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 1 people (EW)",
          },
          {
            "cabin_id": "6",
            "cabin_name": "Call Pod 3c",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 250 people (EW)",
          },
          {
            "cabin_id": "7",
            "cabin_name": "Call Pod 3d",
            "cabin_type": "Conference Room",
            "description": "Sufficient for 215 people (EW)",
          },
          {
            "cabin_id": "8",
            "cabin_name": "Call Pod 3e",
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
    const [cabinDetails, setCabinDetails] = useState<MainFloorInterface[]>([])

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
            //instead of a promise make an api call here
            const response = await fetch(`${url}/get/cabin_details/v1`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
            })
            const data = await response.json()
            
            if(response.ok){
                setCabinDetails(data)
            }
        }

        fetchCabinDetails()
    },[])

    return (
        <FloorContainer>
          {cabinDetails.length === 0 ? <h1>Loading...</h1>: cabinDetails.map((floor)=>{
            console.log(floor.cabins, "FLoor details")
                return (
                    <FloorItem key = {floor.floor_name} floor = {floor.floor_name} cabins = {floor.cabins}/>
                )
            })}
        </FloorContainer>
    )
}

export default Cabin