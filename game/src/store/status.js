import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import _ from "lodash";

export const moneySlice = createSlice({
    name: "status",
    initialState: {
        money: 0,
        totalEmails: 0,
        successEmails: 0,
        unsuccessfulEmails: 0,
        isUpdating: false,
        gameWon: false,
        canCurrentlyTrain: [],
        username: nanoid(6),
        initialOpen: true
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
        resetStatus: (state) => {
            state.money = 0;
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
        toggleInitialOpen: (state) => {
            state.initialOpen = !state.initialOpen;
        },
        resetCanCurrentlyTrain: (state) => {
            state.canCurrentlyTrain = [];
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
    changeUsername,
    resetStatus,
    toggleInitialOpen,
    resetCanCurrentlyTrain
} = moneySlice.actions;

export default moneySlice.reducer;
