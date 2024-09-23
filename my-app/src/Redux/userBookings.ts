import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { url } from "../Utils";

interface BookingsObj {
    floorName: string
    cabinName: string
    bookingId: string
    startDate: string
    endDate: string
    timeSlots: string[]
}

interface Bookings {
    bookings: BookingsObj[],
    error: boolean,
    isLoading: boolean
}

const initialState: Bookings = {
    bookings: [],
    error: false,
    isLoading: false
}


export const getUserBookings = createAsyncThunk('userBookings/getUserBookings', 
    async(_, {rejectWithValue}) => {
        try{
            const data = await fetch(`${url}/user/my_bookings/v1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${Cookies.get('access_token')}`
                },
            });
            const response = await data.json();
            if(data.status === 200){
                const newArr = response.map((data: any) => {
                    return {
                        floorName: data.Floor_name,
                        cabinName: data.cabin_name,
                        bookingId: data.Booking_id,
                        startDate: data.start_date,
                        endDate: data.end_date,
                        timeSlots: data.time_slots
                    }
                })
                return newArr
            }
        }catch(e){
            return rejectWithValue(e)
        }
    }
)

export const UserBookingsSlice = createSlice({
    name: 'userBookings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserBookings.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(getUserBookings.fulfilled, (state, action) => {
                state.bookings = action.payload
                state.error = false;
                state.isLoading = false
            })
            .addCase(getUserBookings.rejected, (state) => {
                state.isLoading = false;
                state.error = true
            })
    }
})

export default UserBookingsSlice.reducer