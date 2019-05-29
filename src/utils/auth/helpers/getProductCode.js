import * as LocalStorage from "../../local-storage";
import constants from "../constants";

export default function() {
    return Number(LocalStorage.getItem(constants.LOCAL_STORAGE_KEY.PRODUCT));
}
