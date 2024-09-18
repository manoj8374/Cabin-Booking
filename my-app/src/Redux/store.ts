import { configureStore } from "@reduxjs/toolkit";
import whobookedSlice from "./whobookedslice";
import confirmSlotsSlice from "./confirmslotsslice";
import CabinSlice from "./CabinSlice";

const store = configureStore({
    reducer: {
        whobooked: whobookedSlice,
        confirmSlots: confirmSlotsSlice,
        Cabin: CabinSlice
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;