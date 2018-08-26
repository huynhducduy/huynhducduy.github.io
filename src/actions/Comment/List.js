import axios from "axios";

import config from "../../config";
import { REQUEST, SUCCESS, FAILURE } from "../../constraints/Comment/List";

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

export default id => dispatch => {
  dispatch(request());
  axios
    .get(`${config.api_base_url}/api/v1/blogs/${id}/comments`)
    .then(response => {
      dispatch(success(response.data));
    })
    .catch(error => dispatch(failure(error)));
};
