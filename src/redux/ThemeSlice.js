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
        }
    }
    
})
export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer