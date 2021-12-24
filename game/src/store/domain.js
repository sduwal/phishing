import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
    name: "domain",
    initialState: {
        name: "NONE",
        subdomains: []
    },
    reducers: {
        changeDomain: (state, action) => {
            state.name = action.payload;
        },
        addSubDomain: (state, action) => {
            state.subdomains = [...state.subdomains, action.payload];
        },
        clearSubDomains: (state) => {
            state.subdomains = [];
        }
    }
});

export const { changeDomain, addSubDomain, clearSubDomains } =
    domainSlice.actions;

export default domainSlice.reducer;
