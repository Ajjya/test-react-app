import {getTodo as getTodoApi} from 'services/api/todoApi';

export const SET_TODO_LIST = 'SET_TODO_LIST';

export const getTodo = () => async dispatch => {
  try{
    const results = await getTodoApi();

    dispatch({
      type: SET_TODO_LIST,
      payload: results
    })
  } catch (e) {
    console.error(e)
  }
};