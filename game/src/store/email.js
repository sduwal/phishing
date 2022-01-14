import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: "email",
    initialState: { value: {}, prevEmails: [] },
    reducers: {
        spoofEmail: (state, action) => {
            state.value = { ...state.value, from: action.payload };
        },
        changeEmail: (state, action) => {
            console.log({ ...action.payload });
            state.value = { ...action.payload };
        },
        changeLinkType: (state, action) => {
            state.value = { ...state.value, linkType: action.payload };
        },
        addSentEmail: (state, action) => {
            state.prevEmails = [...state.prevEmails, action.payload];
        }
    }
});

export const { spoofEmail, changeEmail, changeLinkType, addSentEmail } =
    emailSlice.actions;

export default emailSlice.reducer;
