import { loadingBarMiddleware } from "react-redux-loading-bar";

export default loadingBarMiddleware({
    promiseTypeSuffixes: ["REQUEST", "SUCCESS", "FAILURE"],
});
