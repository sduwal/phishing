import { createSlice } from "@reduxjs/toolkit";

export const emailSlice = createSlice({
    name: "email",
    initialState: {},
    reducers: {
        spoofEmail: (state, action) => {
            state.value = { ...action.payload, from: action.payload.from };
        }
    }
});

export const { spoofEmail } = emailSlice.actions;

export default emailSlice.reducer;
