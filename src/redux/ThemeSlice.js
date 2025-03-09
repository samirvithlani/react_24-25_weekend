import { createSlice } from "@reduxjs/toolkit"



const themeSlice  = createSlice({
    name: "theme",
    initialState: {
        theme: "light"
    },
    reducers:{
        //action change theme
        changeTheme:(state,action)=>{
            state.theme = state.theme === "light" ? "dark" : "light"
        },
        resetTheme:(state)=>{
            state.theme = "light"
        }
    }
    
})
export const {changeTheme,resetTheme} = themeSlice.actions
export default themeSlice.reducer