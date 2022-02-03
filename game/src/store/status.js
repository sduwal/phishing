import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import _ from "lodash";

export const moneySlice = createSlice({
    name: "status",
    initialState: {
        money: 1_000,
        totalEmails: 0,
        successEmails: 0,
        unsuccessfulEmails: 0,
        isUpdating: false,
        gameWon: false,
        canCurrentlyTrain: [],
        // count: { "spelling": 0, "grammar": 0 },
        currentTrainingMode: "spelling",
        username: nanoid(6)
    },
    reducers: {
        changeUsername: (state, action) => {
            state.username = action.payload;
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
        },
        setCanCurrentlyTrain: (state, action) => {
            state.canCurrentlyTrain = [
                ...state.canCurrentlyTrain,
                ...action.payload
            ];

            state.canCurrentlyTrain = _.uniq(state.canCurrentlyTrain);
        },
        // incrementTrainingCount: (state, action) => {
        //     state.count[action.payload] += 1;
        // },
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
    incrementTrainingCount,
    changeCurrentTrainingMode,
    changeUsername
} = moneySlice.actions;

export default moneySlice.reducer;
