import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
    name: "timer",
    initialState: {
        value: 540,
        price: 2500,
        factor: 1
    },
    reducers: {
        increment: (state) => {
            state.value += 120;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
        buyTime: (state) => {
            state.value += 120;
            state.price += Math.floor(200 * state.factor);
            state.factor += 0.5;
        }
    }
});

export const { increment, decrement, incrementByAmount, buyTime } =
    timerSlice.actions;

export default timerSlice.reducer;
