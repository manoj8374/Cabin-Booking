import { configureStore } from "@reduxjs/toolkit";
import whobookedSlice from "./whobookedslice";

const store = configureStore({
    reducer: {
        whobooked: whobookedSlice
    },
});

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;