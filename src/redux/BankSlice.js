import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name:"bank",
    initialState:{
        balance:0
    },
    reducers:{
        //action
        //action type,payload..
        depositAction(state,action){
            state.balance = state.balance + action.payload
        },
        withdrawAction(state,action){
            state.balance = state.balance - action.payload
        }
    }
})

export const {depositAction,withdrawAction} =  bankSlice.actions
export default bankSlice.reducer //reducer..