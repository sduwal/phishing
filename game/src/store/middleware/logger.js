import supabase from "../../supabase";

const logger = (store) => (next) => async (action) => {
    //     await supabase.from("logs").insert({
    //         userId: store.getState().interaction.userId,
    //         type: action.type,
    //         action: action.payload,
    //         date: new Date().toString()
    //     });
    const result = next(action);
    return result;
};

export default logger;
