import {
	ROTATE,
} from '../actions/rotateActions';

const initialState = {
  rotating: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROTATE:
        console.log(action.payload);
      return {
        rotating: action.payload
      };
    default:
      return state;
  }
};