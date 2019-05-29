import * as methods from "../methods";

export default function({ url, module }) {
    const Endpoints = {};

    Endpoints.List = {
        url   : `${url}/${module}`,
        method: methods.GET,
    };

    Endpoints.Create = {
        url   : Endpoints.List.url,
        method: methods.POST,
    };

    Endpoints.Read = {
        url   : `${Endpoints.List.url}/{id}`,
        method: methods.GET,
    };

    Endpoints.Update = {
        url   : Endpoints.Read.url,
        method: methods.PUT,
    };

    Endpoints.Delete = {
        url   : Endpoints.Read.url,
        method: methods.DELETE,
    };

    return Endpoints;
}
