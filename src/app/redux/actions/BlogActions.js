import axios from "axios";

export const GET_POSTS = "GET_POSTS";


export const getPosts = () => dispatch => {
  axios.get("https://blog.ziaway.ca/wp-json/wp/v2/posts?include[]=3245&include[]=3491&include[]=1748&include[]=3252").then(res => {
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  });
};


