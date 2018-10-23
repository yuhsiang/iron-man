(function(){
  // INIT Setup
  var data = [],
    view = '<li class="{{check}}" data-i="{{i}}"><span class="todo-content">{{content}}</span><span class="close">x</span></li>';
  var controller = new TodoController({
    view,
    data,
    bindId: '#todo-list',
  });

  controller.addTodo('第一個工作');
  controller.addTodo('先完成這個', true);

  controller.registerEvent('click', function (e) {
    var temp = e.target,
      i = null;

    while (temp !== e.currentTarget && !i) {
      i = temp.getAttribute('data-i');
      temp = temp.parentElement;
    }

    if (e.target.tagName === 'LI') {
      controller.checkItem(parseInt(i));
    }

    if (e.target.className === 'close') {
      controller.deleteItem(parseInt(i));
    }
  })

  todoButton = document.querySelector('#addTodo');
  todoButton.addEventListener('click', function () {
    var inputValue = document.getElementById('todo-input').value;
    if (inputValue === '') {
      alert("請輸入待辦事項");
    } else {
      controller.addTodo(inputValue);
    }
  }, false);
})()