export default function(type) {
    switch (type) {
        case "timestamp":
            return data => Math.floor(Number(new Date(data)) / 1000);
        case "id":
        case "number":
            return data => Number(data);
        // case "int":
        case "integer":
            return data => parseInt(data);
        // case "double":
        case "float":
            return data => parseFloat(data);
        // case "bool":
        case "boolean":
            return data => data == true; // eslint-disable-line
        default:
            return data => (data ? String(data) : "");
    }
}
