import supabase from "../../supabase";

const logger = (store) => (next) => async (action) => {
    try {
        if (process.env.REACT_APP_ENV !== "development") {
            await supabase.from("logs").insert({
                userId: store.getState().status.username,
                type: action.type,
                action: action.payload,
                date: new Date().toString()
            });
        }
    } catch (err) {
        if (process.env.REACT_APP_ENV !== "development") {
            await supabase.from("errors").insert({
                error: err.message
            });
        }
    } finally {
        const result = next(action);
        return result;
    }
};

export default logger;
