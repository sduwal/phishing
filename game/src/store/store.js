import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import moneyReducer from "./status";
import attackerReducer from "./attacker";
import domainReducer from "./domain";
import emailReducer from "./email";
import stepsReducer from "./steps";
import interactionReducer from "./interaction";

export default configureStore({
    reducer: {
        timer: timerReducer,
        status: moneyReducer,
        attacker: attackerReducer,
        domain: domainReducer,
        email: emailReducer,
        steps: stepsReducer,
        interaction: interactionReducer
    }
});
