import setAccessToken from "./setAccessToken";
import setRefreshToken from "./setRefreshToken";
import setAccessTokenExpiresAt from "./setAccessTokenExpiresAt";
import setProduct from "./setProduct";

export default function() {
    setAccessToken();
    setRefreshToken();
    setAccessTokenExpiresAt();
    setProduct();
}
