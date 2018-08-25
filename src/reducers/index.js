import { combineReducers } from "redux";

import resumeReducer from "./Resume";
import introReducer from "./Intro";
import listBlogReducer from "./Blog/List";
import showBlogReducer from "./Blog/Show";

const reducers = combineReducers({
  intro: introReducer,
  resume: resumeReducer,
  listBlog: listBlogReducer,
  showBlog: showBlogReducer
});

export default reducers;
