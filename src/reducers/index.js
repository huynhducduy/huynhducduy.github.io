import ResumeReducer from "./Resume";
import IntroReducer from "./Intro";
import { ListBlogReducer, ShowBlogReducer } from "./Blog";
import { ListCommentReducer, CreateCommentReducer } from "./Comment";
import LoginReducer from "./Auth/Login";

export default {
    intro        : IntroReducer,
    resume       : ResumeReducer,
    listBlog     : ListBlogReducer,
    showBlog     : ShowBlogReducer,
    listComment  : ListCommentReducer,
    createComment: CreateCommentReducer,
    login        : LoginReducer,
};
