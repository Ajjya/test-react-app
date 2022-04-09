import { createStore, applyMiddleware } from "redux";
import rotateReducer from "store/reducers/rotateReducer";
import thunk from 'redux-thunk';

function configureStore() {
  return createStore(rotateReducer, applyMiddleware(thunk));
}

export default configureStore;