import { createSlice } from "@reduxjs/toolkit";
import { MONEY_PER_SUCCESSFUL_EMAIL, GOAL_AMOUNT } from "../constants";

export const stepsSlice = createSlice({
    name: "steps",
    initialState: {
        stepsEnabled: true,
        initialStep: 0,
        steps: [
            {
                element: ".timer",
                intro: "Keep an eye on your time! Once the timer runs out, you lose!"
            },
            {
                element: ".addTime",
                intro: "You can buy time by paying $2500 for 120 seconds. Price will increase everytime you buy by 50%."
            },
            {
                element: ".stats",
                intro: "You can see your overall status here."
            },
            {
                element: ".total",
                intro: "The number of vitcims. This number updates when you send an email."
            },
            {
                element: ".failed",
                intro: "The number of emails which were ignored, unopened or simply ineffective."
            },
            {
                element: ".success",
                intro: "The number of emails which were opened and clicked."
            },
            {
                element: ".money",
                intro: `Your balance. This number updates when your phishing emails are successful. You get \$${MONEY_PER_SUCCESSFUL_EMAIL} for each successful email.`
            },
            {
                element: ".domain",
                intro: "Shows your current domain. New domain can be purchased in the market place."
            },
            {
                element: ".email",
                intro: "Craft new emails with the help of your helper."
            },
            {
                element: ".marketplace",
                intro: "You can purchase new domains in the market place."
            },
            {
                element: ".attackers",
                intro: "Train your helper with different skills. Training your helper will increase the effectiveness of the generated emails."
            },
            {
                element: ".prev",
                intro: "Check stats of sent emails. Emails will appear here after they stop receiving traction."
            },
            {
                element: ".stats",
                intro: `Start crafting emails and reach \$${GOAL_AMOUNT.toLocaleString()}!`
            }
        ]
        // hintsEnabled: false
    },
    reducers: {
        setStepsEnabled: (state, action) => {
            state.stepsEnabled = action.payload;
        }
    }
});

export const { setStepsEnabled } = stepsSlice.actions;

export default stepsSlice.reducer;
