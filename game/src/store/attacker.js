import { createSlice } from "@reduxjs/toolkit";

export const attackerSlice = createSlice({
    name: "attacker",
    initialState: {
        value: {}
    },
    reducers: {
        changeAttacker: (state, action) => {
            state.value = { ...action.payload };
        }
    }
});

export const { changeAttacker } = attackerSlice.actions;

export default attackerSlice.reducer;
