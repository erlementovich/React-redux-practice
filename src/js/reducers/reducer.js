import { ADD_ARTICLE } from "../constants/action-types";

const initiateState = {
  articles: [
    {
      title: "React Redux Tutorial for Beginners",
      id: 1
    },
    {
      title: "TypeScript tutorial for beginners",
      id: 2
    }
  ]
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
