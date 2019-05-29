import { isEmpty, isNil } from "ramda";
// Is null or empty
export default function(value) {
    return isEmpty(value) || isNil(value);
}
