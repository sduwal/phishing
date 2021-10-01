import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "money",
    initialState: {
        value: 1000
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.value -= action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
    moneySlice.actions;

export default moneySlice.reducer;
