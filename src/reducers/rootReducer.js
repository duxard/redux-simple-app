import { DELETE_POST, INC_COUNT, ADD_POST, GET_POSTS } from '../actions/types';

const initState = {
  posts: [],
  counter: 0
};

const rootReducer = (state = initState, action) => {
  switch(action.type) {
    case DELETE_POST:
      console.log(action);
      return state;
    case INC_COUNT:
      let newVal = state.counter + 1;
      return {
        ...state,
        counter: newVal
      }
    case ADD_POST:
      console.log(action.payload);
      return {
        ...state,
        posts: [action.payload, ...state.posts]
    }
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
