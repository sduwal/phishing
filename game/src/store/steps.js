import { createSlice } from "@reduxjs/toolkit";

export const stepsSlice = createSlice({
    name: "steps",
    initialState: {
        stepsEnabled: false,
        initialStep: 0,
        steps: [
            {
                element: ".timer",
                intro: "Keep an eye on your time! Once the timer runs out, you lose!"
            },
            {
                element: ".addTime",
                intro: "You can buy time by paying 10,000 for 10 seconds."
            },
            {
                element: ".stats",
                intro: "You can see your overall status here."
            },
            {
                element: ".total",
                intro: "The total number of emails sent. This number updates when you send an email."
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
                intro: "You balance. This number updates when your phishing emails are successful. The amount you can get is random."
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
                intro: "Train your helper with different skills. Training helper will increase the effectiveness of the generated emails."
            },
            {
                element: ".prev",
                intro: "Check stats of sent emails. Emails will appear here after they stop receiving traction."
            }
        ],
        hintsEnabled: false
    },
    reducers: {
        setStepsEnabled: (state, action) => {
            state.stepsEnabled = action.payload;
        }
    }
});

export const { setStepsEnabled } = stepsSlice.actions;

export default stepsSlice.reducer;
