// import axios from "axios";

export const LIST_BLOG_REQUEST = "LIST_BLOG_REQUEST";
export const LIST_BLOG_SUCCESS = "LIST_BLOG_SUCCESS";
export const LIST_BLOG_FAILURE = "LIST_BLOG_FAILURE";

export const listBlogRequest = () => ({
  type: LIST_BLOG_REQUEST
});

export const listBlogSuccess = listBlog => ({
  type: LIST_BLOG_SUCCESS,
  payload: listBlog
});

export const listBlogFailure = error => ({
  type: LIST_BLOG_FAILURE,
  payload: error
});

export const listBlog = (page, size) => {
  return dispatch => {
    dispatch(listBlogRequest());
    fetch(`http://35.240.216.201:4000/api/v1/blogs?page=${page}&size=${size}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(res => {
        dispatch(listBlogSuccess(res));
      })
      .catch(error => dispatch(listBlogFailure(error)));
  };
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
