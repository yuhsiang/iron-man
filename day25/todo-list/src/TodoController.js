import TodoService from './service/firebase';

// import TodoItem from './TodoItem';

class TodoController {
  constructor({ view, data, bindId }) {
    this.data = data;
    this.view = view;
    this.element = document.querySelector(bindId);
  }

  init() {
    this.element.innerHTML = '讀取中';
    TodoService.getTodoList().then((list) => {
      this.data = list;
      console.log(this.data)
      this.render();
    });
  }

  addTodo(name, checked) {
    TodoService.addTodo(name, checked).then((item) => {
      this.data.push(item);
      this.render();
    });
  }

  deleteItem(index) {
    const item = this.data[index];
    TodoService.deleteTodo(item.id).then(() => {
      this.data.splice(index, 1);
      this.render();
    });
  }

  checkItem(index) {
    const item = this.data[index];
    TodoService.updateTodo(item.id, item).then((updatedItem) => {
      this.render();
    });
  }

  render() {
    let renderViewText = this.view;
    let i;
    const { length } = this.data;
    let item;
    let checkValue;
    let resultView = '';

    this.empty();

    // set values, skip sanitize text for now...
    for (i = 0; i < length; i += 1) {
      item = this.data[i];
      renderViewText = this.view;
      checkValue = item.check ? 'list-group-item-dark' : '';
      renderViewText = renderViewText.replace('{{check}}', checkValue);
      renderViewText = renderViewText.replace('{{name}}', item.name);
      renderViewText = renderViewText.replace('{{i}}', i);
      resultView += renderViewText;
    }
    this.element.innerHTML = resultView;
  }

  empty() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

  registerEvent(eventType, callback) {
    if (typeof callback === 'function') {
      this.element.addEventListener(eventType, callback, false);
    }
  }
}

export default TodoController;
