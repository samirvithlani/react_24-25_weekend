import { createSlice } from "@reduxjs/toolkit";

var students = [
    {
        id: 1,
        name: "Rohan",
        age: 20,
    },
    {
        id: 2,
        name: "Rohit",
        age: 21,
    },
    {
        id: 3,
        name: "Rahul",
        age: 22,
    }
]

const studentSlice = createSlice({

    name:"student",
    initialState:{
        students:students
    },
    reducers:{
        filterStudent:(state,action)=>{
            //action payload --> age
            console.log("action......",action.payload)
            state.students = students.filter((stu)=>stu.age >= parseInt(action.payload))
        }
    }

})
export const {filterStudent} = studentSlice.actions
export default studentSlice.reducer