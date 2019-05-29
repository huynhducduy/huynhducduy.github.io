import defaultModel from "../models/defaultModel";
import createAction from "./createAction";
import { CREATE } from "../types";

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
        type: CREATE,
        sendModel,
        receiveModel,
        endpoint,
        body,
        query,
        custom,
    });
}
