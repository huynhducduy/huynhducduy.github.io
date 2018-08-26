import { REQUEST, SUCCESS, FAILURE } from "../../constraints/Comment/List";

const initialState = {
  data: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null
      };

    default:
      return state;
  }
};
