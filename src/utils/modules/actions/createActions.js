import LIST from "./LIST";
import CREATE from "./CREATE";
import READ from "./READ";
import UPDATE from "./UPDATE";
import DELETE from "./DELETE";

export default function({ namespace, receiveModel, sendModel, endpoints }) {
    const Actions = {};

    Actions.List = function(
        { query = {} } /* page, size, field, sort_type) */
    ) {
        return LIST({
            namespace,
            receiveModel,
            endpoint: endpoints.List,
            query,
        });
    };

    Actions.Read = function({ id = 0 }) {
        return READ({
            namespace,
            receiveModel,
            endpoint: { ...endpoints.Read, params: { id } },
        });
    };

    Actions.Create = function({ body = {} }) {
        return CREATE({
            namespace,
            sendModel,
            receiveModel,
            endpoint: endpoints.Create,
            body,
        });
    };

    Actions.Update = function({ id = 0, body = {} }) {
        return UPDATE({
            namespace,
            receiveModel,
            sendModel,
            endpoint: { ...endpoints.Update, params: { id } },
            body,
        });
    };

    Actions.Delete = function({ id = 0 }) {
        return DELETE({
            namespace,
            endpoint: { ...endpoints.Delete, params: { id } },
        });
    };

    return Actions;
}
