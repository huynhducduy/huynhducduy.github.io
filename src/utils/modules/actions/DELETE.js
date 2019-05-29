import defaultModel from "../models/defaultModel";
import createAction from "./createAction";
import { DELETE } from "../types";

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
        type: DELETE,
        sendModel,
        receiveModel,
        endpoint,
        body,
        query,
        custom,
    });
}
