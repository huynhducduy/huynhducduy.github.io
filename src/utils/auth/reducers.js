import { combineReducers } from "redux";
import namespace from ".";
import * as types from "./types";
import createReducer from "../modules/reducers/createReducer";

export default combineReducers({
    Login: createReducer({ namespace, type: types.LOGIN }),
});
