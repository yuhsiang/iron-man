import * as firebase from 'firebase/app';

import uuid from 'uuid/v4';

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

const writeUserData = (name, checked) => {
  const createRef = firebase.database().ref(`${KEY_TODOS}/`).push();
  createRef.set({
    name,
    checked,
  });
  console.log(`${createRef.key} - created`);
};

writeUserData('第一個任務', false);
writeUserData('第二個任務', true);


// writeUserData('awef', false)
// var recentPostsRef = firebase.database().ref(KEY_TODOS).limitToLast(100);
// writeUserData('test-todo', true);
// recentPostsRef.once('value', function (snapshot) {
//   console.log('snapshot', snapshot)
//   snapshot.forEach(function (childSnapshot) {
//     var childKey = childSnapshot.key;
//     var childData = childSnapshot.val();
//     console.log(childKey, childData)
//   });
// });

