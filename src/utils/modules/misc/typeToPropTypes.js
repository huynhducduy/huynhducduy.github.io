import PropTypes from "prop-types";

export default function(type) {
    switch (type) {
        case "id":
        case "number":
        case "int":
        case "integer":
        case "float":
        case "double":
            return PropTypes.number;
        case "boolean":
            return PropTypes.bool;
        case "timestamp":
            return PropTypes.instanceOf(Date);
        default:
            return PropTypes.string;
    }
}
