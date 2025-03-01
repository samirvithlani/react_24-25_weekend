import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/CartSlice"
import bankSlice from "./redux/BankSlice"
import themeSlice from "./redux/ThemeSlice"
import  studentSlice from "./redux/StudentRecordSlice"


export const store = configureStore({
    reducer:{
        cart:cartSlice,
        bank:bankSlice,
        theme:themeSlice,
        student:studentSlice
    }
})