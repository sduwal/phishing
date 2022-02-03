import { configureStore } from "@reduxjs/toolkit";
import moneyReducer from "./status";
import attackerReducer from "./attacker";
import domainReducer from "./domain";
import emailReducer from "./email";
import stepsReducer from "./steps";
import weekReducer from "./week";

import logger from "./middleware/logger";

export default configureStore({
    reducer: {
        status: moneyReducer,
        attacker: attackerReducer,
        domain: domainReducer,
        email: emailReducer,
        steps: stepsReducer,
        week: weekReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
