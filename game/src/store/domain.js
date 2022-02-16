import { createSlice } from "@reduxjs/toolkit";

export const domainSlice = createSlice({
    name: "domain",
    initialState: {
        name: "xyz.xyz",
        subdomains: [],
        activeDomain: "xyz.xyz"
    },
    reducers: {
        changeDomain: (state, action) => {
            state.name = action.payload;
            state.activeDomain = action.payload;
        },
        addSubDomain: (state, action) => {
            state.subdomains = [...state.subdomains, action.payload];
        },
        clearSubDomains: (state) => {
            state.subdomains = [];
        },
        changeActiveDomain: (state, action) => {
            state.activeDomain = action.payload;
        }
    }
});

export const {
    changeDomain,
    addSubDomain,
    clearSubDomains,
    changeActiveDomain
} = domainSlice.actions;

export default domainSlice.reducer;
