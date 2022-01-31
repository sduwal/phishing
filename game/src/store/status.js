import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
    name: "status",
    initialState: {
        money: 1_000,
        totalEmails: 0,
        successEmails: 0,
        unsuccessfulEmails: 0,
        isUpdating: false,
        gameWon: false,
        canCurrentlyTrain: ["spelling", "grammar"],
        count: { "spelling": 0, "grammar": 0 },
        currentTrainingMode: "spelling"
    },
    reducers: {
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
        },
        setCanCurrentlyTrain: (state, action) => {
            state.canCurrentlyTrain = [
                ...state.canCurrentlyTrain,
                action.payload
            ];
        },
        increamentTrainingCount: (state, action) => {
            state.count[action.payload] += 1;
        },
        changeCurrentTrainingMode: (state, action) => {
            state.currentTrainingMode = action.payload;
        }
    }
});

export const {
    incrementByAmount,
    decrementByAmount,
    incrementTotalEmails,
    updateSuccess,
    setIsUpdating,
    setGameWon,
    setCanCurrentlyTrain,
    increamentTrainingCount,
    changeCurrentTrainingMode
} = moneySlice.actions;

export default moneySlice.reducer;
