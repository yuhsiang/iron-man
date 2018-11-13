export const KEY = 'todo';

const createActionType = (key, name) => `${key}/${name}`;

export const FETCH_TODO_LIST = createActionType(KEY, 'FETCH_TODO_LIST');
export const SET_TODO_LIST = createActionType(KEY, 'SET_TODO_LIST');

export const DELETE_TODO = createActionType(KEY, 'DELETE_TODO');
export const UPDATE_TODO = createActionType(KEY, 'UPDATE_TODO');
export const ADD_TODO = createActionType(KEY, 'ADD_TODO');

export const SET_LOADING = createActionType(KEY, 'SET_LOADING');
