export default function(data = { error: {} }) {
    const modelObject = {};

    if (data.error) {
        modelObject.code = data.error.code;
        modelObject.message = data.error.message;
    } else {
        // Handle unexpected error
        modelObject.code = -1;
        modelObject.message = data.message;
    }

    return modelObject;
}
