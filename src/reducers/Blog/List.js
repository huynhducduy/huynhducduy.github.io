import {
  LIST_BLOG_REQUEST,
  LIST_BLOG_SUCCESS,
  LIST_BLOG_FAILURE
} from "../../actions/Blog/List";

const initialState = {
  data: {},
  loading: true,
  error: null
};

export default function ListBlogReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_BLOG_REQUEST:
      return {
        data: {},
        loading: true,
        error: null
      };

    case LIST_BLOG_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      };

    case LIST_BLOG_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: null
      };

    default:
      return state;
  }
}
