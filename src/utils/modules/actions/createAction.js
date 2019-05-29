import format from "string-template";
import * as events from "../events";
import { request } from "../../api/caller";

import errorModel from "../models/errorModel";
import defaultModel from "../models/defaultModel";

export default function({
    namespace = "",
    type = "",
    receiveModel = defaultModel,
    sendModel = defaultModel,
    endpoint: { url = "", method = "GET", params = {} },
    headers = {},
    body = {},
    query = {},
    custom = {}, // https://github.com/axios/axios#request-config
    customRequest = function() {},
    customThen = function() {},
    customCatch = function() {},
}) {
    return function(dispatch) {
        return new Promise(async (resolve, reject) => {
            dispatch(events.request({ namespace, type }));
            customRequest();
            request({
                to    : format(url, params),
                method,
                params: query,
                data  : sendModel(type)(body), // Transform data before sending, eg: can be qs.stringify(data) for application/x-www-form-urlencoded
                headers,
                custom,
            })
                .then(async response => {
                    const data = receiveModel(type)(response.data); // Transform data before receive
                    await customThen(data);
                    dispatch(
                        events.success({
                            namespace,
                            type,
                            data,
                        })
                    );
                    resolve(data);
                })
                .catch(async error => {
                    const data = errorModel(
                        error.response ? error.response.data : error // return error of axios instead
                    );
                    await customCatch(data);
                    dispatch(
                        events.failure({
                            namespace,
                            type,
                            error: data,
                        })
                    );
                    reject(data);
                });
        });
    };
}
