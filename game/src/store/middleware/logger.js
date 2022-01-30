import { nanoid } from "@reduxjs/toolkit";
import supabase from "../../supabase";

const logger = (store) => (next) => async (action) => {
    // console.group(action.type === "timer/decrement");
    if (action.type !== "timer/decrement") {
        await supabase.from("logs").insert({
            userId: store.getState().interaction.userId,
            type: action.type,
            action: action.payload
        });
        // console.group(action.type);
        // console.info("dispatching", action);
        const result = next(action);
        // console.groupEnd();
        return result;
    }
};

export default logger;