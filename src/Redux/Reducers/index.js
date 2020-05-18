import { combineReducers } from "redux";
import getEvent from "./HistoryReducers";
import getSignUp from "./RegisterReducers";
import user from "./LoginReducers";

const rootReducer = combineReducers({ getEvent, getSignUp, user });

export default rootReducer;
