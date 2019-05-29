import { isEmpty } from "ramda";
import { shape, arrayOf } from "prop-types";
import typeToPropTypes from "../misc/typeToPropTypes";

export default function(constants) {
    const shapeObject = {};

    Object.keys(constants).forEach(item => {
        shapeObject[item] = typeToPropTypes(constants[item].type);
        if (
            !isEmpty(constants[item].multi) &&
            constants[item].multi !== false
        ) {
            shapeObject[item] = arrayOf(shapeObject[item]);
        }
    });

    return shape(shapeObject);
}
