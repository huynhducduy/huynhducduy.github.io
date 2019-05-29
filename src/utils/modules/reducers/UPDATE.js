import { UPDATE } from "../types";
import createReducer from "./createReducer";

export default function({ namespace }) {
    return createReducer({ namespace, type: UPDATE });
}
