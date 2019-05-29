export default function(constant) {
    const columns = [];

    Object.keys(constant).forEach(item => {
        if (constant[item].hideFromList === true) return;

        const column = {
            title          : constant[item].label,
            value          : item,
            type           : constant[item].type,
            sortable       : !!constant[item].sortable,
            searchable     : !!constant[item].searchable,
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

        columns.push(column);
    });

    return columns;
}
