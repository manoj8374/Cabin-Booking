import { createSlice } from "@reduxjs/toolkit";


interface confirmSlotsState {
    isClicked: boolean,
    slots: string[],
}

const initialState: confirmSlotsState = {
    isClicked: false,
    slots: []
}


const confirmSlotsSlice = createSlice({
    name: 'confirmSlots',
    initialState,
    reducers: {
        ConfirmSlotPopUp: (state, action) => {
            state.isClicked = !state.isClicked;
            state.slots = action.payload.slots
        }
    }
})

export const {ConfirmSlotPopUp} = confirmSlotsSlice.actions
export default confirmSlotsSlice.reducer