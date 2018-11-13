import {
  SET_TODO_LIST,
  DELETE_TODO,
  UPDATE_TODO,
  ADD_TODO,
  SET_LOADING,
} from './constants';

const initialState = {
  list: [],
  isLoading: false,
}

const reducer = (state = initialState, action) => {
  const {
    payload,
    error,
  } = action;

  switch (action.type) {
    case SET_TODO_LIST:
      // 取消讀取狀態
      const updatedState = {
        ...state,
        isLoading: false,
      }

      // 遇到錯誤
      if (error) {
        return updatedState;
      }

      // 將 list 存取或 merge
      return {
        ...updatedState,
        list: action.payload,
      };

    case DELETE_TODO:
      // 像是 react 版本的 delete 只是 id 是從 action 帶進來的
      return {
        ...state,
        list: state.list.filter((item) => item.id !== payload.id),
        isLoading: false,
      };

    case UPDATE_TODO:
      return {
        ...state,
        isLoading: false,
        list: state.list.map((item) => {
          if (item.id === payload.id) {
            return payload.updatedTodo;
          }
          return item;
        }),
      }
    case ADD_TODO:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, payload.item],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload.isLoading,
      };

    default:
      return state;
  }
}

export default reducer
