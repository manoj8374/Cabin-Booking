import {setStartDate, setEndDate} from "../Redux/dateAndTimeSlice";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../Redux/store";


export const useDateAndTime = ()=>{
    const startdate = useSelector((state: RootState) => state.dateAndTime.start_date);
    const endDate = useSelector((state: RootState) => state.dateAndTime.end_date);
    const dispatch = useDispatch();


    const updateStartDate = (startDate: string)=>{
        dispatch(setStartDate({startDate}));
    }

    const updateEndDate = (endDate: string)=>{
        dispatch(setEndDate({endDate}));
    }

    return {startdate, endDate, updateStartDate, updateEndDate}
}