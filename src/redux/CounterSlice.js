const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    initialState: {
        value: 0
    },
    name: 'counter',
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0;
        }
    }
})
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;