import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = 'https://67571cc4c0a427baf94bc4c7.mockapi.io/user'
export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
    const response = await axios.get(API_URL)
    return response.data
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: [],
        status: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {

                state.user = action.payload
            })
    }
})
export default authSlice.reducer