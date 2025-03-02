import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState ={
    content: [],
    isLoading: false,
    error: null,
}

export const addUser = createAsyncThunk(
    "content/fetchUsers",
    //async...
    async (userData) => {
        console.log("userData",userData)
        const res = await axios.post("https://node5.onrender.com/user/user",userData)
        const data = res.data
        return data
    }
)

export const fetchUsers = createAsyncThunk(
    "content/fetchUsers",
    //async...
    async () => {
        const res = await axios.get("https://node5.onrender.com/user/user")
        const data = res.data
        return data
    }
)

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading = true

        })
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.error.message
        })
    }

})
export default contentSlice.reducer