import { isEmpty } from "ramda";
import constants from "../constants";

import setItem from "../../local-storage/setItem";
import removeItem from "../../local-storage/removeItem";

export default function(product = "") {
    if (isEmpty(product)) removeItem(constants.LOCAL_STORAGE_KEY.PRODUCT);
    else setItem(constants.LOCAL_STORAGE_KEY.PRODUCT, product);
}
