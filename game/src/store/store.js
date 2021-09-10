import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timer";
import moneyReducer from "./money";
import attackerReducer from "./attacker";

export default configureStore({
    reducer: {
        timer: timerReducer,
        money: moneyReducer,
        attacker: attackerReducer
    }
});
