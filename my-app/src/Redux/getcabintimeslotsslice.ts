import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../Utils";
import Cookies from "js-cookie";

interface InputData {
    start_date: string
    end_date: string
    cabin_ids: string[]
}

export const getCabinTimeSlots = createAsyncThunk(
    "getcabindetailsslice/getCabinTimeSlots",
    async (inputData: InputData, {rejectWithValue}) => {
        try{
            const response = await fetch(`${url}/get/cabin_slots/v1`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
                body: JSON.stringify(inputData)
            });
            const data = await response.json();
            if(response.status === 200){
                return data
            }else{
                return rejectWithValue("error")
            }
        }catch(e){
            return rejectWithValue(e)
        }
    }
)

interface TimeSlotsArr{
    slot: string
    availability: boolean
}

interface TimeSlotsInterface{
    cabin_id: string,
    time_slots: TimeSlotsArr[]
}

interface TimeSlotsObj{
    time_string: string,
    availability: boolean
}

interface IntialState{
    isLoading: boolean
    error: boolean
    slots: TimeSlotsInterface[]
}

const initialState: IntialState = {
    isLoading: false,
    error: false,
    slots: []
}

export const getCabinTimeSlotsSlice = createSlice({
    name: "getcabintimeslotsslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCabinTimeSlots.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCabinTimeSlots.fulfilled, (state, action) => {
                state.isLoading = false
                state.slots = action.payload
            })
            .addCase(getCabinTimeSlots.rejected, (state) => {
                state.isLoading = false
                state.error = true
            })
        }
})

export default getCabinTimeSlotsSlice.reducer