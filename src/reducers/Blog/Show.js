import {
  SHOW_BLOG_REQUEST,
  SHOW_BLOG_SUCCESS,
  SHOW_BLOG_FAILURE
} from "../../actions/Blog/Show";

const initialState = {
  data: {},
  loading: false,
  error: null
};

export default function ShowBlogReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_BLOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case SHOW_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case SHOW_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null
      };

    default:
      return state;
  }
}
