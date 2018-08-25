// import axios from "axios";

export const SHOW_BLOG_REQUEST = "SHOW_BLOG_REQUEST";
export const SHOW_BLOG_SUCCESS = "SHOW_BLOG_SUCCESS";
export const SHOW_BLOG_FAILURE = "SHOW_BLOG_FAILURE";

export const showBlogRequest = () => ({
  type: SHOW_BLOG_REQUEST
});

export const showBlogSuccess = showBlog => ({
  type: SHOW_BLOG_SUCCESS,
  payload: showBlog
});

export const showBlogFailure = error => ({
  type: SHOW_BLOG_FAILURE,
  payload: error
});

export function showBlog(id) {
  return dispatch => {
    dispatch(showBlogRequest());
    fetch(`http://35.240.216.201:4000/api/v1/blogs/${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        dispatch(showBlogSuccess(res));
      })
      .catch(error => dispatch(showBlogFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
