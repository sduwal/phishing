import { createSlice } from "@reduxjs/toolkit";

export const weekSlice = createSlice({
    name: "week",
    initialState: {
        currentWeek: 1,
        emailWrote: 0,
        peopleReached: 0,
        moneyGained: 0,
        weeklyStats: [],
        maxEmails: [7, 10, 15, 15],
        weeklyGoals: [3000, 5000, 10000, 15000]
    },
    reducers: {
        incrementWeek: (state) => {
            state.weeklyStats.push({
                emailWrote: state.emailWrote,
                peopleReached: state.peopleReached,
                moneyGained: state.moneyGained
            });
            state.currentWeek += 1;
            state.emailWrote = 0;
            state.peopleReached = 0;
            state.moneyGained = 0;
        },
        // resetStats: (state) => {
        //     state.emailWrote = 0;
        //     state.peopleReached = 0;
        //     state.moneyGained = 0;
        // },
        increamentEmailWrote: (state, action) => {
            state.emailWrote += action.payload;
        },
        increamentPeopleReached: (state, action) => {
            state.peopleReached += action.payload;
        },
        increamentMoneyGained: (state, action) => {
            state.moneyGained += action.payload;
        }
    }
});

export const {
    increamentWeek,
    // resetStats,
    increamentEmailWrote,
    increamentMoneyGained,
    increamentPeopleReached
} = weekSlice.actions;

export default weekSlice.reducer;
