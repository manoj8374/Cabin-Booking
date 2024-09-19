import { createSlice } from "@reduxjs/toolkit";


interface confirmSlotsState {
    isClicked: boolean,
    slots: string[],
    error?: boolean,
    cabinId: string
}

const initialState: confirmSlotsState = {
    isClicked: false,
    slots: [],
    cabinId: "",
}


const confirmSlotsSlice = createSlice({
    name: 'confirmSlots',
    initialState,
    reducers: {
        ConfirmSlotPopUp: (state, action) => {
            state.isClicked = action.payload.isClicked;
            state.slots = action.payload.slots;
            state.cabinId = action.payload.cabinId

        },

        setError: (state, action) => {
            state.error = action.payload.error
        }
    }
})

export const {ConfirmSlotPopUp, setError} = confirmSlotsSlice.actions
export default confirmSlotsSlice.reducer