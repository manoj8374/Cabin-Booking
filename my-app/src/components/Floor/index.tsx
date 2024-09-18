import {useState, useEffect } from 'react'
import {FloorContainer, SpinnerContainer} from './cabinStyled'
import FloorItem from '../FloorItem'
import {url} from '../../Utils'
import Cookies from 'js-cookie'
import ClipLoader from "react-spinners/ClipLoader";
import { setCabinIds } from '../../Redux/CabinSlice'
import {useCabinData} from '../../Utils'

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
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {updateSelectedSlots} = useCabinData()

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
            const response = await fetch(`${url}/get/cabin_details/v1`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
            })
            const data = await response.json()
            
            if(response.ok){
                setCabinDetails(data)
                const cabinIds = data.map((floor: MainFloorInterface)=>{
                  const cabinIdsSub = floor.cabins.map((cabin)=>{
                      return cabin.cabin_id
                  })
                  return cabinIdsSub
                    
                })
                const ids = cabinIds.flat()
                updateSelectedSlots(ids)
            }
        }

        fetchCabinDetails()
    },[])

    return (
        <FloorContainer isloading = {isLoading}>
          {cabinDetails.length === 0 ? <SpinnerContainer><ClipLoader color={"#1F41BB"} loading={true} size={50} /></SpinnerContainer>: cabinDetails.map((floor)=>{
                return (
                    <FloorItem key = {floor.floor_name} floor = {floor.floor_name} cabins = {floor.cabins}/>
                )
            })}
        </FloorContainer>
    )
}

export default Cabin