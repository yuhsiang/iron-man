import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

import TodoItem from './TodoItem';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyANyWcX0rllkI8fvAz6S7XO3QbfMr-nExQ',
  authDomain: 'todolist-67ee2.firebaseapp.com',
  databaseURL: 'https://todolist-67ee2.firebaseio.com',
  projectId: 'todolist-67ee2',
};

firebase.initializeApp(config);

const KEY_TODOS = 'todos';

const addTodo = (name, checked) => {
  const createRef = firebase.database().ref(`${KEY_TODOS}/`).push();
  const item = new TodoItem(createRef.key, {
    name,
    checked,
    time: Date.now(),
  });
  return new Promise((resolve, reject) => {
    createRef.set(item).then(() => {
      resolve({ ...item });
    }, () => {
      reject();
    });
  });
};


const getTodoList = () => {
  const listRef = firebase.database().ref(KEY_TODOS).orderByChild('ts');
  return new Promise((resolve) => {
    listRef.once('value', (snapshot) => {
      const res = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        const todoItem = new TodoItem(childKey, childData);
        res.push(todoItem);
      });
      resolve(res);
    });
  });
};

const deleteTodo = (id) => {
  const deleteRef = firebase.database().ref(`${KEY_TODOS}/${id}`);
  return new Promise((resolve, reject) => {
    deleteRef.remove().then(() => {
      resolve();
    }, () => {
      reject();
    });
  });
};

const updateTodo = (id, item) => {
  const updateRef = firebase.database().ref(`${KEY_TODOS}/${id}`);
  const updatedTodo = new TodoItem(item.id, { ...item });
  updatedTodo.toggle();
  return new Promise((resolve, reject) => updateRef.update(updatedTodo)
    .then(() => {
      item.toggle();
      resolve(item);
    }, () => {
      reject();
    }));
};

export default {
  getTodoList,
  addTodo,
  deleteTodo,
  updateTodo,
};
