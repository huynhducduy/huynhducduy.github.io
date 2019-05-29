import { isEmpty } from "ramda";
import constants from "../constants";

import setItem from "../../local-storage/setItem";
import removeItem from "../../local-storage/removeItem";

export default function(token = "") {
    if (isEmpty(token)) removeItem(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN);
    else setItem(constants.LOCAL_STORAGE_KEY.ACCESS_TOKEN, token);
}
