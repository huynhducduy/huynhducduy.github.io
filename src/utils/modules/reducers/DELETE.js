import { DELETE } from "../types";
import createReducer from "./createReducer";

export default function({ namespace, state = {}, action }) {
    return createReducer({
        namespace,
        type: DELETE,
        state,
        action,
    });
}
