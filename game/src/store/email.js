import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: "email",
    initialState: {
        prevEmails: [],
        key: "",
        linkType: "normal",
        from: "",
        sentNumber: 0,
        canSend: false
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
        },
        increaseSent: (state) => {
            state.sentNumber += 1;
        },
        toggleCanSend: (state, action) => {
            state.canSend = action.payload;
        }
    }
});

export const {
    spoofEmail,
    changeLinkType,
    addSentEmail,
    changeKey,
    resetKey,
    increaseSent,
    toggleCanSend
} = emailSlice.actions;

export default emailSlice.reducer;
