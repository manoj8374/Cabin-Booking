import { createSlice } from "@reduxjs/toolkit";

interface DateAndTimeState {
    start_date: string;
    end_date: string;
}

const initialState: DateAndTimeState = {
    start_date: "",
    end_date: "",
};

export const dateAndTimeSlice = createSlice({
    name: "dateAndTime",
    initialState,
    reducers: {
        setStartDate: (state, action) => {
            state.start_date = action.payload.startDate;
        },
        setEndDate: (state, action) => {
            state.end_date = action.payload.endDate;
        },
    },
});

export const {setStartDate, setEndDate} = dateAndTimeSlice.actions;
export default dateAndTimeSlice.reducer;