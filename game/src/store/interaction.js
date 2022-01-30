import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const interactionSlice = createSlice({
    name: "interaction",
    initialState: {
        "userId": nanoid(),
        "start": 0,
        "end": 0,
        "time": {
            "spelling": 0,
            "grammar": 0,
            "styling": 0,
            "spoof": 0,
            "links": 0,
            "research": 0
        }
    },
    reducers: {
        changeStart: (state, action) => {
            state.start = Date.now();
        },
        changeEnd: (state, action) => {
            state.end = Date.now();
        },
        changeTime(state, action) {
            state.time[action.payload.type] = Date.now();
        }
    }
});

export const { changeStart, changeEnd, changeTime } = interactionSlice.actions;

export default interactionSlice.reducer;
