import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./App";

function render() {
    ReactDOM.render(<App />, document.getElementById("root"));
}

render();

// Enable hot-module-replacement
if (module.hot) {
    module.hot.accept("./app", () => {
        render();
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
