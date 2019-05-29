import defaultModel from "../models/defaultModel";
import createListModel from "../models/createListModel";
import createAction from "./createAction";
import { LIST } from "../types";

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
        type        : LIST,
        sendModel,
        receiveModel: createListModel(receiveModel),
        endpoint,
        body,
        query,
        custom,
    });
}
