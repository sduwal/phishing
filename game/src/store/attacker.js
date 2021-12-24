import { createSlice } from "@reduxjs/toolkit";

export const attackerSlice = createSlice({
    name: "attacker",

    initialState: {
        languageSkills: [],
        techSkills: [],
        isTraining: false,
        totalAmount: 0,
        image: "https://picsum.photos/200",
        trainingTime: 0,
        trainingEnd: "",
        currentTraining: ""
    },
    reducers: {
        setLanguageSkills: (state, action) => {
            state.languageSkills = [...state.languageSkills, action.payload];
        },
        setTechSkills: (state, action) => {
            state.techSkills = [...state.techSkills, action.payload];
        },
        setIsTraining: (state, actions) => {
            state.isTraining = actions.payload;
        },
        setTotalAmount: (state, actions) => {
            state.totalAmount += actions.payload;
        },
        setTrainingEnd: (state, actions) => {
            state.trainingProgress += actions.payload;
        },
        setCurrentTraining: (state, actions) => {
            state.currentTraining = actions.payload;
        }
    }
});

export const {
    setLanguageSkills,
    setTechSkills,
    setIsTraining,
    setTotalAmount,
    setTrainingEnd,
    setCurrentTraining
} = attackerSlice.actions;

export default attackerSlice.reducer;
