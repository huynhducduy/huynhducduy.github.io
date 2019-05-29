import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

import { intlReducer } from "react-intl-redux";
import { getInitialIntlReducer } from "./i18n";

import reducers from "./reducers";

const middlewares = [thunk];

const initialState = {
    intl: getInitialIntlReducer(),
};

const reducer = combineReducers({
    intl: intlReducer,
    ...reducers,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
);
