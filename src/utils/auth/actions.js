import namespace from ".";
import * as loginModel from "./models/login";
import * as endpoints from "./endpoints";
import * as types from "./types";
import * as events from "../modules/events";

import * as helpers from "./helpers";
import createAction from "../modules/actions/createAction";
import getRoute from "../router/getRoute";
import config from "./config";

export const Login = function({ body = {}, history = {}, location = {} }) {
    return createAction({
        namespace,
        receiveModel: loginModel.receiveModel,
        type        : types.LOGIN,
        endpoint    : endpoints.Login,
        body,
        customThen(data) {
            helpers.setAccessToken(data.access_token);
            helpers.setRefreshToken(data.refresh_token);
            helpers.setAccessTokenExpiresAt(data.expires_at);

            // After logged in successfully, navigate user back where they leave
            let redirectTo = getRoute(config.login_redirect_to).path;

            if (location.state) {
                if (location.state.from) {
                    redirectTo =
                        location.state.from.pathname +
                        location.state.from.search +
                        location.state.from.hash;
                }
            }

            history.push(redirectTo);
        },
    });
};

export const Logout = function({ history }) {
    return async function(dispatch) {
        dispatch(events.request({ namespace, type: types.LOGOUT }));
        helpers.clearAuth();
        dispatch(events.success({ namespace, type: types.LOGOUT }));
        history.push(getRoute(config.logout_redirect_to).path);
    };
};
