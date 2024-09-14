import { createSlice } from "@reduxjs/toolkit";

interface WhobookedState {
    isClicked: boolean,
    timeSlot: string,
    cabinId: string
}

const initialState: WhobookedState = {
    isClicked: false,
    timeSlot: "",
    cabinId: ""
}

const whobookedSlice = createSlice({
    name: "whobooked",
    initialState: initialState,
    reducers: {
        setWhoBooked: (state, action) => {
            state.isClicked = true;
            state.timeSlot = action.payload.timeSlot;
            state.cabinId = action.payload.cabinId
        },
        setPopUpClosed: (state, action)=>{
            state.isClicked = false
        }
    }
})

export const { setWhoBooked, setPopUpClosed } = whobookedSlice.actions
export default whobookedSlice.reducer