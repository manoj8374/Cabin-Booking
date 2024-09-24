import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { url } from "../Utils";
import Cookies from "js-cookie";


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

interface IntialState{
    isLoading: boolean,
    error: boolean,
    details: MainFloorInterface[]
}

const intialState: IntialState = {
    isLoading: false,
    error: false,
    details: []
}

export const getCabinDetails = createAsyncThunk(
    "getcabindetailsslice/getCabinDetails",
    async (_, {rejectWithValue}) => {
        try{
            const response = await fetch(`${url}/get/cabin_details/v1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
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

export const cabinDetailsSlice = createSlice({
    name: "getcabindetailsslice",
    initialState: intialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCabinDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getCabinDetails.rejected, (state) => {
                state.isLoading = false
                state.error = true
            })
            .addCase(getCabinDetails.fulfilled, (state, action) => {
                state.details = action.payload
                state.error = false
                state.isLoading = false
            })            
    }
})


export default cabinDetailsSlice.reducer