import * as firebase from 'firebase/app';
// These imports load individual services into the firebase namespace.
import 'firebase/auth';
import 'firebase/database';

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
  const createRef = firebase.database().ref(`${KEY_TODOS}/`).push()
  createRef.set({
    name,
    checked,
    ts: Date.now(),
  });
  createRef.off();
  console.log(`${createRef.key} - created`);
};

// addTodo('第一個任務', false);
// addTodo('第二個任務', true);

const getList = () => {
  const listRef = firebase.database().ref(KEY_TODOS).orderByChild('ts');
  listRef.once('value', (snapshot) => {
    const res = [];
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      res.push({
        id: childKey,
        ...childData,
      });
    });
    listRef.off();
    console.log(res);
  });
};

const deleteTodo = (id) => {
  const deleteRef = firebase.database().ref(`${KEY_TODOS}/${id}`);
  deleteRef.remove();
};

const updateTodo = (id, updatedTodo) => {
  const updateRef = firebase.database().ref(`${KEY_TODOS}/${id}`);
  return updateRef.update(updatedTodo);
};

// updateTodo(
//   '-LPoJTDfsMGLsJYBrld2',
//   {
//     checked: false,
//     name: '第二個任務',
//     ts: 1540623557547,
//   },
// );
