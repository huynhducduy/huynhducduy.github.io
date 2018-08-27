import axios from "axios";

import config from "../../config";
import { REQUEST, SUCCESS, FAILURE } from "../../constraints/Auth/Login";

const request = () => ({
  type: REQUEST
});

const success = data => ({
  type: SUCCESS,
  payload: data
});

const failure = error => ({
  type: FAILURE,
  payload: error
});

export default (email, password) => dispatch => {
  dispatch(request());
  axios
    .post(`${config.api_base_url}/auth/sign_in`, {
      auth: {
        email,
        password
      }
    })
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(error => dispatch(failure(error)));
};
