import React from "react";
import isAuthenticated from "../auth/helpers/isAuthenticated";
import isValidProduct from "#utils/auth/helpers/isValidProduct";
import ConditionalRouter from "./conditionalRouter";

export default function({ component, ...rest }) {
    const config = {
        component,
        condition : isValidProduct() && isAuthenticated(),
        redirectTo: !isValidProduct() ? "selectProduct" : "login",
        reason    : "You dont have permission to access to this route",
        ...rest,
    };

    return <ConditionalRouter {...config} />;
}
