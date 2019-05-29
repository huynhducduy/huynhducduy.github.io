export default function(data = { status: {} }) {
    const modelObject = {};

    modelObject.status = data.status;

    return modelObject;
}
