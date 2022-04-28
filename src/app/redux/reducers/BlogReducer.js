import {
  GET_POSTS
} from "../actions/BlogActions";

const initialState = [];

const NotificationReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: {
      return  [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default NotificationReducer;
