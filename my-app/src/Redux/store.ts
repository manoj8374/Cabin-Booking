import { configureStore } from "@reduxjs/toolkit";
import CabinSlice from "./CabinSlice";
import userSlice from "./userSlice";
import UserBookingsSlice from "./userBookings";

const store = configureStore({
    reducer: {
        Cabin: CabinSlice,
        user: userSlice,
        userBookings: UserBookingsSlice
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;