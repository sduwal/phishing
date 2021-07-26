import React, { createContext, useReducer } from "react";

const initialState = {
    email: { subject: "", email: "" },
};

export const EmailContext = createContext();

export function EmailReducer(state, action) {
    switch (action.type) {
        case "CHANGE":
            return {
                ...state,
                subject: action.email.subject,
                email: action.email.email,
            };
        default:
            return state;
    }
}
