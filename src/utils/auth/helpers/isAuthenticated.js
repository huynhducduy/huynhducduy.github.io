import * as LocalStorage from "../../local-storage";
import constants from "../constants";
import tokenIsExpired from "./tokenIsExpired";

export default function() {
    return (
        !!LocalStorage.getItem(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN) &&
        !tokenIsExpired()
    );
}
