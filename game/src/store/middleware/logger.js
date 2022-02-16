import supabase from "../../supabase";

const logger = (store) => (next) => async (action) => {
    const ignore = [
        "week/incrementPeopleReached",
        "status/incrementTotalEmails",
        "animate/updateAnimateNumber",
        "week/incrementMoneyGained",
        "status/updateSuccess",
        "email/toggleCanSend",
        "status/incrementByAmount",
        "week/incrementEmailWrote",
        "status/resetStatus"
    ];
    try {
        if (
            process.env.REACT_APP_ENV !== "development" &&
            !ignore.includes(action.type)
        ) {
            await supabase.from("logs").insert({
                userId: store.getState().status.username,
                type: action.type,
                action: action.payload,
                date: new Date().toString()
            });
        }
    } catch (err) {
        if (process.env.REACT_APP_ENV !== "development") {
            try {
                await supabase.from("errors").insert({
                    error: err.message
                });
            } catch (err) {
                // console.log(err);
            }
        }
    } finally {
        const result = next(action);
        return result;
    }
};

export default logger;
