import products from "#products";
import getProductCode from "./getProductCode";

export default function() {
    return products.map(product => product.code).includes(getProductCode());
}
