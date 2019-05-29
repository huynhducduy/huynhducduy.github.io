import { addLocaleData } from "react-intl";
import flat from "flat";
import locale2 from "locale2";

import createCorrectLocale from "./utils/createCorrectLocale";
import createIsValidLocale from "./utils/createIsValidLocale";
import getLocale from "./utils/getLocale";

import config from "./config";

//----------------------------------------------------------------------

export const correctLocale = createCorrectLocale(config);
export const isValidLocale = createIsValidLocale(correctLocale);

export function getInitialIntlReducer() {
    const locale =
        Object.keys(config).length > 1
            ? correctLocale(getLocale()) ||
              correctLocale(locale2) ||
              Object.keys(config)[0]
            : Object.keys(config)[0];

    addLocaleData(require(`react-intl/locale-data/` + locale).default); // eslint-disable-line

    return {
        locale,
        messages: flat(require("./translations/" + locale)), // eslint-disable-line
    };
}
