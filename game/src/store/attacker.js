import { createSlice } from "@reduxjs/toolkit";

export const attackerSlice = createSlice({
    name: "attacker",

    initialState: {
        // TODO: reset this
        languageSkills: [
            { "display": "Spellings", "efficiency": 1 },
            { "display": "Grammar", "efficiency": 1 },
            { "display": "Writing mails", "efficiency": 1 }
        ],
        techSkills: [
            { "display": "Styling", "efficiency": 1 },
            { "display": "Links", "efficiency": 1 },
            { "display": "Spoof the sender", "efficiency": 1 },
            { "display": "Research Targeted group", "efficiency": 1 }
        ],
        isTraining: false,
        totalAmount: 0,
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
