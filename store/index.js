import {createStore, combineReducers, applyMiddleware} from "redux";
import Thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {reducer as transactionReducer, MODULE_NAME as transactionsModuleName} from "./transactions";

const rootReducer = combineReducers({
    [transactionsModuleName]: transactionReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)));

export default store;
