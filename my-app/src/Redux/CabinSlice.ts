import { createSlice } from "@reduxjs/toolkit";
import { format } from "path";
//this slice will include start date, end date, all the cabin ids, time slots obj

interface CabinState {
    start_date: string;
    end_date: string;
    cabin_ids: string[];
}

const currentDate = new Date().toISOString().slice(0, 10)

const initialState: CabinState = {
    start_date: currentDate,
    end_date: currentDate,
    cabin_ids: []
}

export const CabinSlice = createSlice({
    name: "cabinSlice",
    initialState,
    reducers: {
        setStartDate: (state, action) => {
            state.start_date = action.payload.startDate;
        },
        setEndDate: (state, action) => {
            state.end_date = action.payload.endDate;
        },
        setCabinIds: (state, action) => {
            state.cabin_ids = action.payload.cabinIds;
        }
    }
})

export const {setStartDate, setEndDate, setCabinIds} = CabinSlice.actions;
export default CabinSlice.reducer