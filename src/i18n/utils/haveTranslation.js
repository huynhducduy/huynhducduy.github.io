import store from "../../store";

export default function(trans) {
    return typeof store.getState().intl.messages[trans] === "string";
}
