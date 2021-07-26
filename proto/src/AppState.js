import React, { createContext, useReducer } from "react";
export const EmailContext = createContext({
    subject: "",
    email: "",
});

export function EmailReducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return action.email;
        default:
            return state;
    }
}
