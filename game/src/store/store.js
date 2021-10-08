import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import moneyReducer from "./money";
import attackerReducer from "./attacker";
import domainReducer from "./domain";
import emailReducer from "./email";

export default configureStore({
    reducer: {
        timer: timerReducer,
        money: moneyReducer,
        attacker: attackerReducer,
        domain: domainReducer,
        email: emailReducer
    }
});
