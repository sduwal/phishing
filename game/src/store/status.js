import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "status",
    initialState: {
        money: 1_000,
        totalEmails: 0,
        successEmails: 0,
        unsuccessfulEmails: 0,
        isUpdating: false,
        gameWon: false
    },
    reducers: {
        increment: (state) => {
            state.money += 1;
        },
        decrement: (state) => {
            state.money -= 1;
        },
        incrementByAmount: (state, action) => {
            state.money += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.money -= action.payload;
        },
        incrementTotalEmails: (state, action) => {
            state.totalEmails += action.payload;
        },
        updateSuccess: (state, actions) => {
            state.successEmails += actions.payload.successful;
            state.unsuccessfulEmails += actions.payload.unsuccessful;
        },
        setIsUpdating: (state, action) => {
            state.isUpdating = action.payload;
        },
        setGameWon: (state, action) => {
            state.gameWon = action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
    incrementTotalEmails,
    updateSuccess,
    setIsUpdating,
    setGameWon
} = moneySlice.actions;

export default moneySlice.reducer;
