import defaultModel from "../models/defaultModel";
import createAction from "./createAction";
import { UPDATE } from "../types";

export default function({
    namespace = "",
    receiveModel = defaultModel,
    sendModel = defaultModel,
    endpoint = {},
    body = {},
    query = {},
    custom = {},
}) {
    return createAction({
        namespace,
        type: UPDATE,
        sendModel,
        receiveModel,
        endpoint,
        body,
        query,
        custom,
    });
}
