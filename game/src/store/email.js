import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: "email",
    initialState: { value: {} },
    reducers: {
        spoofEmail: (state, action) => {
            state.value = { ...state.value, from: action.payload.from };
        },
        changeEmail: (state, action) => {
            state.value = { ...action.payload };
        }
    }
});

export const { spoofEmail, changeEmail } = emailSlice.actions;

export default emailSlice.reducer;