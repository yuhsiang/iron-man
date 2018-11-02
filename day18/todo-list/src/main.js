import 'bootstrap';
import './styles/main.scss';

import TodoController from './TodoController';


const data = [];
const view = '<li class="list-group-item list-group-item-action {{check}}" data-i="{{i}}"><span class="todo-content">{{content}}</span><span class="close">x</span></li>';

const controller = new TodoController({
  view,
  data,
  bindId: '#todo-list',
});

controller.addTodo('第一個工作');
controller.addTodo('先完成這個', true);

controller.registerEvent('click', (e) => {
  let temp = e.target;
  let i = null;

  while (temp !== e.currentTarget && !i) {
    i = temp.getAttribute('data-i');
    temp = temp.parentElement;
  }

  if (e.target.tagName === 'LI') {
    controller.checkItem(parseInt(i, 10));
  }

  if (e.target.className === 'close') {
    controller.deleteItem(parseInt(i, 10));
  }
});

const todoButton = document.querySelector('#addTodo');
todoButton.addEventListener('click', (e) => {
  e.preventDefault();
  const todoInput = document.getElementById('todo-input');
  const inputValue = todoInput.value;

  if (inputValue === '') {
    alert("請輸入待辦事項");
  } else {
    controller.addTodo(inputValue);
    todoInput.value = '';
  }
}, false);
