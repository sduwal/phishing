import { createSlice } from "@reduxjs/toolkit";

export const attackerSlice = createSlice({
    name: "attacker",

    initialState: {
        languageSkills: [
            // {
            //     "display": "Spellings",
            //     "efficiency": 35,
            //     "value": "spelling"
            // },
            // {
            //     "display": "Grammar",
            //     "efficiency": 35,
            //     "value": "grammar"
            // },
            // {
            //     "efficiency": 30,
            //     "display": "Writing mails",
            //     "value": "good email"
            // }
        ],
        techSkills: [
            // {
            //     "efficiency": 20,
            //     "display": "Styling",
            //     "value": "styling"
            // },
            // {
            //     "efficiency": 20,
            //     "display": "Links",
            //     "value": "links"
            // },
            // {
            //     "efficiency": 25,
            //     "display": "Spoof the sender",
            //     "hint": "Hide yourself. Pretend to be someone else.",
            //     "cost": 4000,
            //     "time": 12,
            //     "value": "spoof"
            // },
            // {
            //     "efficiency": 15,
            //     "display": "Research Targeted group",
            //     "value": "research"
            // }
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
