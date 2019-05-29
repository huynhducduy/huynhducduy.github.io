import isHidingTo from "#utils/modules/misc/isHidingTo";

export default function(constant) {
    return function(type) {
        const fields = [];

        Object.keys(constant).forEach(item => {
            if (isHidingTo(type)(constant[item])) return;

            const field = {
                label          : constant[item].label,
                description    : constant[item].description,
                name           : item,
                type           : constant[item].type,
                rules          : constant[item].rules,
                options        : constant[item].options,
                optionsType    : constant[item].optionsType,
                optionsColor   : constant[item].optionsColor,
                multi          : constant[item].multi,
                multiType      : constant[item].multiType,
                booleanText    : constant[item].booleanText,
                booleanColor   : constant[item].booleanColor,
                maxWidth       : constant[item].maxWidth,
                maxHeight      : constant[item].maxHeight,
                width          : constant[item].width,
                height         : constant[item].height,
                timestampFormat: constant[item].timestampFormat,
            };

            if (constant[item].hideWhenUpdating === true) field.readOnly = true;

            fields.push(field);
        });

        return fields;
    };
}
