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
    changeUsername
} = moneySlice.actions;

export default moneySlice.reducer;
