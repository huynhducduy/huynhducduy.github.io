import React from "react";
import LoadingBar from "react-redux-loading-bar";

export default function() {
    return (
        <LoadingBar
            style={{
                position            : "fixed",
                zIndex              : "100",
                backgroundColor     : "#1890ff",
                height              : "2px",
                "-webkit-box-shadow": "1px 1px 5px 0px rgba(0,0,0,0.5)",
                "-moz-box-shadow"   : "1px 1px 5px 0px rgba(0,0,0,0.5)",
                "box-shadow"        : "1px 1px 5px 0px rgba(0,0,0,0.5)",
            }}
        />
    );
}
