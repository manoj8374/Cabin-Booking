import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../Utils";
import Cookies from "js-cookie";


interface Data {
    email: string
    contact_number: string
    first_name: string
    last_name: string
    team_name: string
    username: string
}

interface IntialStateInterface {
    isLoading: boolean
    error: boolean
    data: Data
}

const initialState: IntialStateInterface = {
    isLoading: false,
    error: false,
    data: {
        first_name: '',
        last_name: '',
        email: '',
        contact_number: '',
        team_name: '',
        username: ''
    }
}

interface InputData {
    cabin_id: string,
    start_date_time: string,
    end_date_time: string
}

export const getUserDetails = createAsyncThunk('whobookedtheslots/getUserDetails', async (inputData: InputData, {rejectWithValue}) => {
    try{
        const response = await fetch(`${url}/user/booked_slots/v1`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('access_token')}`
            },
            body: JSON.stringify(inputData)
        })

        const data = await response.json()
        if(response.status === 200){
            return data
        }else{
            return rejectWithValue(data)
        }
    }catch(e){
        return rejectWithValue(e)
    }
})

export const whobookedtheslotslice = createSlice({
    name: "whobookedtheslotslice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(getUserDetails.rejected, (state) => {
                state.isLoading = false
                state.error = true
            })
    }
})


export default whobookedtheslotslice.reducer
