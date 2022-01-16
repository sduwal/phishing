import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: "email",
    initialState: {
        prevEmails: [],
        key: "",
        linkType: "normal",
        from: ""
    },
    reducers: {
        spoofEmail: (state, action) => {
            state.from = action.payload;
        },
        changeLinkType: (state, action) => {
            state.linkType = action.payload;
        },
        addSentEmail: (state, action) => {
            state.prevEmails = [...state.prevEmails, action.payload];
        },
        changeKey: (state, action) => {
            state.key = action.payload;
        },
        resetKey: (state, action) => {
            state.key = "";
        }
    }
});

export const { spoofEmail, changeLinkType, addSentEmail, changeKey, resetKey } =
    emailSlice.actions;

export default emailSlice.reducer;
