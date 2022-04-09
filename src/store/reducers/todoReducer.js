import {
	SET_TODO_LIST,
} from '../actions/todoActions';

const initialState = {
  list: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO_LIST:
      return {
        list: {...state, list: action.payload}
      };
    default:
      return state;
  }
};