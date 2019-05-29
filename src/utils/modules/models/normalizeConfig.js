import { isNil } from "ramda";
import getRandomHexColor from "../misc/getRandomHexColor";

function defaultBooleanValue(variable, def) {
    return typeof variable == "boolean" ? variable : def;
}

export default function({ config, namespace }) {
    /**
     * Information:
     * - Must have 1 and only 1 field with "id" type (uncheckable)
     * - api -> send |receive -> field
     * - label | description -> {module}.fields.{field}.label | .description
     * - hideFromList | hideFromRead | hideWhenCreating | hideWhenUpdating: default false
     * - Special field: id, image, password, textarea
     */
    const configObj = {};

    Object.keys(config).forEach(field => {
        const newConfig = {};

        newConfig.type = config[field].type;

        newConfig.rules = config[field].rules || [];

        newConfig.send = config[field].api || config[field].send || field;

        newConfig.receive = config[field].api || config[field].receive || field;

        newConfig.label =
            config[field].label ||
            `${namespace.toLowerCase()}.fields.${field}.label`;

        newConfig.description =
            config[field].description ||
            `${namespace.toLowerCase()}.fields.${field}.description`;

        newConfig.hideFromRead = defaultBooleanValue(
            config[field].hideFromRead,
            false
        );

        newConfig.hideWhenCreating = defaultBooleanValue(
            config[field].hideWhenCreating,
            false
        );

        newConfig.hideWhenUpdating = defaultBooleanValue(
            config[field].hideWhenUpdating,
            false
        );

        newConfig.hideFromList = defaultBooleanValue(
            config[field].hideFromList,
            false
        );

        if (newConfig.hideFromList) {
            newConfig.sortable = false;
            newConfig.searchable = false;
        } else {
            newConfig.sortable = defaultBooleanValue(
                config[field].sortable,
                true
            );

            newConfig.searchable = defaultBooleanValue(
                config[field].searchable,
                true
            );
        }

        if (config[field].options) {
            if (Array.isArray(config[field].options)) {
                newConfig.options = {};

                config[field].options.map(value => {
                    newConfig.options[
                        value
                    ] = `${namespace.toLowerCase()}.fields.${field}.options.${value}`;
                });
            } else {
                newConfig.options = config[field].options || false;
            }

            newConfig.optionsType = config[field].optionsType || "select";

            newConfig.multi = !isNil(config[field].multi)
                ? config[field].multi
                : false;

            newConfig.multiType = config[field].multiType || "tag";

            if (config[field].optionsColor) {
                newConfig.optionsColor = config[field].optionsColor;
            } else {
                newConfig.optionsColor = {};

                Object.keys(newConfig.options).map(value => {
                    newConfig.optionsColor[value] = getRandomHexColor();
                });
            }
        } else {
            newConfig.multi = false;
        }

        switch (config[field].type) {
            case "id":
                newConfig.hideWhenCreating = defaultBooleanValue(
                    config[field].hideWhenCreating,
                    true
                );
                newConfig.hideWhenUpdating = defaultBooleanValue(
                    config[field].hideWhenUpdating,
                    true
                );
                break;
            case "image":
                // newConfig.sortable = defaultBooleanValue(
                //     config[field].sortable,
                //     false
                // );
                // newConfig.searchable = defaultBooleanValue(
                //     config[field].searchable,
                //     false
                // );
                // newConfig.hideWhenUpdating = defaultBooleanValue(
                //     config[field].hideWhenUpdating,
                //     true
                // );
                newConfig.maxWidth = config[field].maxWidth || 200;
                newConfig.maxHeight = config[field].maxHeight || 200;
                newConfig.width = config[field].width || "auto";
                newConfig.height = config[field].height || "auto";
                break;
            case "password":
                newConfig.hideWhenUpdating = defaultBooleanValue(
                    config[field].hideWhenUpdating,
                    true
                );
            // eslint-disable-next-line
            case "textarea":
                newConfig.hideFromList = defaultBooleanValue(
                    config[field].hideFromList,
                    false
                );
                break;
            case "boolean":
                newConfig.booleanText = config[field].booleanText || {
                    false: "false",
                    true : "true",
                };
                newConfig.booleanColor = config[field].booleanColor || {
                    false: "#f50",
                    true : "#87d068",
                };
                break;
            case "timestamp":
                newConfig.timestampFormat =
                    config[field].timestampFormat || "Pp";
                break;
            default:
        }

        configObj[field] = newConfig;
    });

    return configObj;
}
