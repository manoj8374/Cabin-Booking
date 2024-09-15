import { configureStore } from "@reduxjs/toolkit";
import whobookedSlice from "./whobookedslice";
import confirmSlotsSlice from "./confirmslotsslice";

const store = configureStore({
    reducer: {
        whobooked: whobookedSlice,
        confirmSlots: confirmSlotsSlice
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;