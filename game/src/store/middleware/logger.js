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
        "status/resetStatus",
        "email/changeKey",
        "domain/clearSubDomains",
        "email/addSentEmail"
    ];
    const tableName =
        process.env.REACT_APP_ENV === "development" ? "devLogs" : "logs";

    try {
        if (!ignore.contains(action.type)) {
            await supabase.from(tableName).insert({
                userId: store.getState().status.username,
                type: action.type,
                action: action.payload,
                date: new Date().toString()
            });
        }
    } catch (err) {
        try {
            await supabase.from("errors").insert({
                error: err.message
            });
        } catch (err) {
            // console.log(err);
        }
    } finally {
        const result = next(action);
        return result;
    }
};

export default logger;
