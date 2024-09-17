import { configureStore } from "@reduxjs/toolkit";
import whobookedSlice from "./whobookedslice";
import confirmSlotsSlice from "./confirmslotsslice";
import dateAndTimeSlice from "./dateAndTimeSlice";

const store = configureStore({
    reducer: {
        whobooked: whobookedSlice,
        confirmSlots: confirmSlotsSlice,
        dateAndTime: dateAndTimeSlice
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;