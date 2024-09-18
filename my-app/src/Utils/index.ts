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

export const url = 'http://192.168.1.21:8000'

export const accessToken = Cookies.get('access_token')