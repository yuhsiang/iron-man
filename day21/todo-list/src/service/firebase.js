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
  const createRef = firebase.database().ref(`${KEY_TODOS}/`).push();
  return createRef.set({
    name,
    checked,
    ts: Date.now(),
  });
};


// addTodo('第二個任務', true);

const getList = () => {
  const listRef = firebase.database().ref(KEY_TODOS).orderByChild('ts');
  return new Promise((resolve) => {
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
      resolve(res);
    });
  });
};

const deleteTodo = (id) => {
  const deleteRef = firebase.database().ref(`${KEY_TODOS}/${id}`);
  return deleteRef.remove();
};

const updateTodo = (id, updatedTodo) => {
  const updateRef = firebase.database().ref(`${KEY_TODOS}/${id}`);
  return updateRef.update(updatedTodo);
};

getList().then((list) => {
  console.log(list);
  return addTodo('測試 promise 資料', false);
})
  .then(getList)
  .then((list) => {
    console.log(list);
    const lastItem = list[list.length - 1];
    console.log('========');
    return updateTodo(lastItem.id, {
      ...lastItem,
      checked: true,
    });
  })
  .then(() => {
    console.log('updated');
    return getList();
  })
  .then((list) => {
    console.log('========');
    console.log(list);
    const lastItem = list[list.length - 1];
    console.log('========');
    console.log(`刪除${lastItem.id}`);
    return deleteTodo(lastItem.id);
  })
  .then(getList)
  .then((list) => {
    console.log('========');
    console.log(list);
  });
