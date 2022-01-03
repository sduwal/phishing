import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: "email",
    initialState: { value: {} },
    reducers: {
        spoofEmail: (state, action) => {
            state.value = { ...state.value, from: action.payload };
        },
        changeEmail: (state, action) => {
            state.value = { ...action.payload };
        },
        changeLinkType: (state, action) => {
            state.value = { ...state.value, linkType: action.payload };
        }
    }
});

export const { spoofEmail, changeEmail, changeLinkType } = emailSlice.actions;

export default emailSlice.reducer;
