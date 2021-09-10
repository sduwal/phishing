import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
    name: "domain",
    initialState: {
        value: {
            name: "NONE"
        }
    },
    reducers: {
        changeDomain: (state, action) => {
            state.value = { ...action.payload };
        }
    }
});

export const { changeDomain } = domainSlice.actions;

export default domainSlice.reducer;
