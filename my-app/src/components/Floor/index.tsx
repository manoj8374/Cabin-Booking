import {useState, useEffect } from 'react'
import {FloorContainer, SpinnerContainer} from './cabinStyled'
import FloorItem from '../FloorItem'
import {url} from '../../Utils'
import Cookies from 'js-cookie'
import ClipLoader from "react-spinners/ClipLoader";
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

const Cabin = ()=>{
    const [cabinDetails, setCabinDetails] = useState<MainFloorInterface[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const {updateSelectedSlots} = useCabinData()

    useEffect(()=>{
        const fetchCabinDetails = async ()=>{
          try{
            const response = await fetch(`${url}/get/cabin_details/v1`,{
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${Cookies.get('access_token')}`
                //   "ngrok-skip-browser-warning": "69420",
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
          }catch(e){
            console.log(e)
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