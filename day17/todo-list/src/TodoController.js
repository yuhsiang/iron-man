import TodoItem from './TodoItem'
function TodoController({ view, data, bindId }) {
  this.data = data;
  this.view = view;
  this.element = document.querySelector(bindId);
}

TodoController.prototype.addTodo = function (content, checked) {
  this.data.push(new TodoItem(content, checked))
  this.render();
}

TodoController.prototype.deleteItem = function (index) {
  this.data.splice(index, 1);
  this.render();
}

TodoController.prototype.checkItem = function (index) {
  this.data[index].toggle();

  this.render();
}

TodoController.prototype.render = function () {
  var renderViewText = this.view,
    i,
    length = this.data.length,
    item,
    checkValue,
    resultView = '';

  this.empty();

  // set values, skip sanitize text for now...
  for (i = 0; i < length; i += 1) {
    item = this.data[i];
    renderViewText = this.view;
    checkValue = item.check ? 'list-group-item-dark' : '';
    renderViewText = renderViewText.replace('{{check}}', checkValue);
    renderViewText = renderViewText.replace('{{content}}', item.content);
    renderViewText = renderViewText.replace('{{i}}', i);
    resultView += renderViewText;
  }
  this.element.innerHTML = resultView;
}

TodoController.prototype.empty = function () {
  while (this.element.firstChild) {
    this.element.removeChild(this.element.firstChild);
  }
}

TodoController.prototype.registerEvent = function (eventType, callback) {
  if (typeof callback === 'function') {
    this.element.addEventListener(eventType, callback, false);
  }
}

export default TodoController;
