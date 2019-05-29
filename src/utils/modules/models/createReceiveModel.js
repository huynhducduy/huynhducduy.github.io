import flat from "flat";
import { isEmpty } from "ramda";
import isHidingTo from "#utils/modules/misc/isHidingTo";
import parseTypeReceive from "#utils/modules/misc/parseTypeReceive";
import * as types from "../types";

export default function(constants) {
    return function(type) {
        return function(data) {
            const modelObject = {};

            if (data.data) {
                data = flat(data.data, {
                    safe: true,
                });

                Object.keys(constants).forEach(item => {
                    if (
                        type === types.LIST &&
                        isHidingTo(type)(constants[item])
                    )
                        return;
                    else if (isHidingTo("READ")(constants[item])) return;

                    if (!isEmpty(data[constants[item].receive])) {
                        modelObject[item] =
                            !isEmpty(constants[item].multi) &&
                            constants[item].multi === false
                                ? parseTypeReceive(constants[item].type)(
                                      data[constants[item].receive]
                                  )
                                : data[constants[item].receive];
                    } else {
                        //eslint-disable-next-line
                        // console.log(
                        //     "MISSING FROM RESPONSE:",
                        //     constants[item].receive
                        // );
                    }
                });
            }

            return modelObject;
        };
    };
}
