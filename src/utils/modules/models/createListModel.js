import defaultModel from "./defaultModel";

export default function(model = defaultModel) {
    return function(type) {
        return function({ data = [], total = 0 }) {
            const listObj = data.map(data => model(type)({ data }));
            listObj.total = total;
            return listObj;
        };
    };
}
