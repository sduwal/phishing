import { createSlice } from "@reduxjs/toolkit";

export const weekSlice = createSlice({
    name: "week",
    initialState: {
        currentWeek: 3,
        emailWrote: 0,
        peopleReached: 0,
        moneyGained: 0,
        weeklyStats: [],
        victims: 0,
        maxEmails: [5, 10, 10, 10],
        // weeklyGoals: [150, 150, 40_0, 85]
        weeklyGoals: [1500, 15000, 38_000, 80_000]
    },
    reducers: {
        incrementWeek: (state) => {
            if (state.currentWeek < 3) {
                state.weeklyStats.push({
                    emailWrote: state.emailWrote,
                    peopleReached: state.peopleReached,
                    moneyGained: state.moneyGained
                });

                state.currentWeek += 1;
                state.emailWrote = 0;
                state.peopleReached = 0;
                state.moneyGained = 0;
            }
        },
        resetWeekStats: (state) => {
            state.emailWrote = 0;
            state.peopleReached = 0;
            state.moneyGained = 0;
        },
        incrementEmailWrote: (state) => {
            state.emailWrote += 1;
        },
        incrementPeopleReached: (state, action) => {
            state.peopleReached += action.payload;
        },
        incrementMoneyGained: (state, action) => {
            state.moneyGained += action.payload;
        }
    }
});

export const {
    incrementWeek,
    incrementEmailWrote,
    incrementMoneyGained,
    incrementPeopleReached,
    resetWeekStats
} = weekSlice.actions;

export default weekSlice.reducer;
