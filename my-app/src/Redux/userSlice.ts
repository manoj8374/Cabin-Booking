import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {url} from "../Utils";


interface IntialState{
    email: string
    username: string
    first_name: string
    last_name: string
    team_name: string
    contact_number: string
    isLoading: boolean
    error: boolean
}

const initialState: IntialState =  {
    email: '',
    username: '',
    first_name: '',
    last_name: '',
    team_name: '',
    contact_number: '',
    isLoading: false,
    error: false
}

const getUserDetails = async()=>{
    try{
        const response = await fetch(`${url}/user/profile/v1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('access_token')}`
            }
        })

        const data = await response.json()
        return data
    }catch(e){
        throw new Error("Error Has Occured")
    }
}

export const fetchUserProfile = createAsyncThunk(
    'user/fetchProfile',
    async (_, {rejectWithValue}) => {
        try{
            const data = await getUserDetails();
            return data;
        }catch(e){
            return rejectWithValue(e)
        }
    }
  );


export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.username = action.payload.username;
                state.email = action.payload.email;
                state.first_name = action.payload.first_name;
                state.last_name = action.payload.last_name;
                state.team_name = action.payload.team_name;
                state.contact_number = action.payload.contact_number;
                state.error = false;
                state.isLoading = false
            })
            .addCase(fetchUserProfile.rejected, (state) => {
                state.isLoading = false;
                state.error = true
            })

            
    }
})

export default UserSlice.reducer