import getItem from "../../utils/local-storage/getItem";
import config from "./constants";

export default function() {
    return getItem(config.LOCAL_STORAGE_KEY.LOCALE);
}
