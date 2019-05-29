export default function(correctLocale) {
    return function(locale) {
        return correctLocale(locale) !== undefined;
    };
}
