import { configureStore } from "@reduxjs/toolkit";
import CabinSlice from "./CabinSlice";
import userSlice from "./userSlice";
import UserBookingsSlice from "./userBookings";
import whobookedtheslotslice from './whobookedtheslotslice'
import cabinDetailsSlice from './getcabindetailsslice'

const store = configureStore({
    reducer: {
        Cabin: CabinSlice,
        user: userSlice.reducer,
        userBookings: UserBookingsSlice,
        whobookedtheslot: whobookedtheslotslice,
        cabindetails: cabinDetailsSlice,
    },
    
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;