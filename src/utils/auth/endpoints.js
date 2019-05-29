import config from "../../config";
import * as methods from "../modules/methods";

const { api_url } = config;

export const Login = {
    url   : `${api_url}/auth/v1/admin/token`,
    method: methods.POST,
};
