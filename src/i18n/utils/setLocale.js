import setItem from "../../utils/local-storage/setItem";
import config from "./constants";

export default function(locale) {
    setItem(config.LOCAL_STORAGE_KEY.LOCALE, locale);
}
