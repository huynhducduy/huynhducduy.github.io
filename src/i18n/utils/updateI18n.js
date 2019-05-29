import flat from "flat";
import { updateIntl } from "react-intl-redux";
import { addLocaleData } from "react-intl";

import setLocale from "./setLocale";
import store from "../../store";

export default async function(locale) {
    await Promise.all([
        import(
            /* webpackChunkName: "i18n/intl-locale-data/[request]" */ `react-intl/locale-data/${locale}`
        ),
        import(
            /* webpackChunkName: "i18n/messages/[request]" */ `../../i18n/${locale}`
        ),
    ]).then(values => {
        addLocaleData(values[0].default);
        store.dispatch(
            updateIntl({
                locale,
                messages: flat(values[1].default),
            })
        );
        setLocale(locale);
    });
}
