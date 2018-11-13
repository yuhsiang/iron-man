import FirebaseService from '../../service/firebase';

import {
  SET_TODO_LIST,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_TODO,
  SET_LOADING,
} from './constants';

export const setLoading = isLoading => ({
  type: SET_LOADING,
  payload: {
    isLoading,
  }
})

export const fetchTodoList = () => dispatch => {
  // 更新頁面讀取狀態
  dispatch(setLoading(true))
  FirebaseService.getTodoList()
    .then((list) => {
      // 非同步更新 state
      dispatch({
        type: SET_TODO_LIST,
        payload: list,
      })
    })
}

export const updateItem = (id, item) => dispatch => {
  // 更新頁面讀取狀態
  dispatch(setLoading(true))

  FirebaseService.updateTodo(id, item)
    .then((item) => {
      dispatch({
        type: UPDATE_TODO,
        payload: {
          id,
          updatedTodo: item,
        },
      })
    })
}

export const addItem = name => dispatch => {
  // 更新頁面讀取狀態
  dispatch(setLoading(true))

  FirebaseService.addTodo(name, false)
    .then((item) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          item,
        }
      })
    })
}

export const deleteItem = id => dispatch => {
  // 更新頁面讀取狀態
  dispatch(setLoading(true))
    FirebaseService.deleteTodo(id)
      .then((res) => {
        dispatch({
          type: DELETE_TODO,
          payload: {
            id,
          }
        })
      })
}