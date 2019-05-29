import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { loadingBarReducer, loadingBarMiddleware } from "plugins/loadingBar";

import { intlReducer } from "react-intl-redux";
import { getInitialIntlReducer } from "./i18n";

import loading from "./utils/modules/reducers/loading/loadingReducer";
import error from "./utils/modules/reducers/error/errorReducer";

import reducers from "./reducers";

//-----------------------------------------------------------------------------

const middlewares = [thunk, loadingBarMiddleware];

const initialState = {
    intl: getInitialIntlReducer(),
};

const reducer = combineReducers({
    intl      : intlReducer,
    loadingBar: loadingBarReducer,
    loading,
    error,
    ...reducers,
});

//-----------------------------------------------------------------------------

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);
