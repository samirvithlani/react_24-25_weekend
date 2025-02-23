import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/CartSlice"
import bankSlice from "./redux/BankSlice"


export const store = configureStore({
    reducer:{
        cart:cartSlice,
        bank:bankSlice
    }
})