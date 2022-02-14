import { createSlice } from "@reduxjs/toolkit";

export const animateSlice = createSlice({
    name: "animate",

    initialState: {
        animateWeeklyPeople: 0,
        animateWeeklyMoney: 0,
        animateWeeklyEmails: 0
    },
    reducers: {
        updateAnimateNumber: (state, action) => {
            state.animateWeeklyPeople = action.payload.animateWeeklyPeople;
            state.animateWeeklyMoney = action.payload.animateWeeklyMoney;
            state.animateWeeklyEmails = action.payload.animateWeeklyEmails;
        }
    }
});

export const { updateAnimateNumber } = animateSlice.actions;

export default animateSlice.reducer;
