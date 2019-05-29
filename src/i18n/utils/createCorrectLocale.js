export default function(data) {
    return function(locale) {
        for (const key in data) {
            if (data[key].aliases.includes(locale)) return key;
        }
        return undefined;
    };
}
