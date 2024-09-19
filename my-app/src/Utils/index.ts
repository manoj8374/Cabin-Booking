import {setStartDate, setEndDate, setCabinIds} from "../Redux/CabinSlice";
import {useDispatch, useSelector} from "react-redux";
import Cookies from "js-cookie";
import { RootState } from "../Redux/store";


export const useCabinData = ()=>{
    const startdate = useSelector((state: RootState) => state.Cabin.start_date);
    const endDate = useSelector((state: RootState) => state.Cabin.end_date);
    const allTheCabinIds = useSelector((state: RootState) => state.Cabin.cabin_ids);
    
    const dispatch = useDispatch();


    const updateStartDate = (startDate: string)=>{
        dispatch(setStartDate({startDate}));
    }

    const updateEndDate = (endDate: string)=>{
        dispatch(setEndDate({endDate}));
    }


    const updateSelectedSlots = (cabinIds: string[])=>{
        dispatch(setCabinIds({cabinIds: cabinIds}));
    }

    return {startdate, endDate, updateStartDate, updateEndDate, updateSelectedSlots, allTheCabinIds}
}

export const getUserDetails = async()=>{
    try{
        const response = await fetch(`${url}/user/profile/v1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('access_token')}`
            },
            body: JSON.stringify({
                "user_id": "e4ec99dc-85e0-4b0b-9710-2d5eaefefc3b"
            })
        })

        const data = await response.json()
        console.log(data)
        return data
    }catch(e){
        console.log(e)
    }
}

export const url = 'https://c304-2401-4900-1cb0-ec72-c97c-7bc9-2148-53c9.ngrok-free.app'

export const accessToken = Cookies.get('access_token')