import { isEmpty } from "ramda";
import * as states from "../states";
import * as types from "../types";

export default function({ namespace, type }) {
    return function(state = {}, action) {
        if (action.type !== `${namespace}_${type}_${states.SUCCESS}`) {
            /**
             * All reducers are object by default, except LIST's reducer. So we need to make it's default to array
             */
            if (type === types.LIST && isEmpty(state)) {
                return [];
            }
            return state;
        }
        return action.payload;
    };
}
