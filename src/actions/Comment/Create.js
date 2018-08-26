import axios from "axios";

import config from "../../config";
import { REQUEST, SUCCESS, FAILURE } from "../../constraints/Comment/Create";

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

export default (id, name, email, content) => dispatch => {
  dispatch(request());
  axios
    .post(`${config.api_base_url}/api/v1/blogs/${id}/comments`, {
      content,
      name,
      email
    })
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(error => dispatch(failure(error)));
};
