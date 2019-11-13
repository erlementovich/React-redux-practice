import { ADD_ARTICLE } from "../constants/action-types";

const initiateState = {
  articles: []
};

const rootReducer = (state = initiateState, action) => {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  return state;
};

export default rootReducer;
