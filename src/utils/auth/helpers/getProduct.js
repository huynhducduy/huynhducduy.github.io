import products from "#products";
import getProductCode from "./getProductCode";

export default function() {
    const currentProduct = getProductCode();
    for (const product of products) {
        if (currentProduct === product.code) return product;
    }
}
