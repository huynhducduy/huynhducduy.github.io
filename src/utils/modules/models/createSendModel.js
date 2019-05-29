import flat from "flat";
import { isEmpty } from "ramda";
import isHidingTo from "#utils/modules/misc/isHidingTo";
import parseTypeSend from "#utils/modules/misc/parseTypeSend";

export default function(constants) {
    return function(type) {
        return function(data) {
            const modelObject = {};

            Object.keys(constants).forEach(item => {
                if (isHidingTo(type)(constants[item])) return;

                if (!isEmpty(data[item])) {
                    modelObject[constants[item].send] =
                        !isEmpty(constants[item].multi) &&
                        constants[item].multi === false
                            ? parseTypeSend(constants[item].type)(data[item])
                            : data[item].map(value =>
                                  parseTypeSend(constants[item].type)(value)
                              );
                } else {
                    // eslint-disable-next-line
                    // console.log("MISSING FOR RESQUEST:", constants[item].send);
                }
            });

            return flat.unflatten(modelObject, {
                safe: true,
            });
        };
    };
}
