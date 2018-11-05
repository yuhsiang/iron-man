function TodoItem(content, check) {
  this.content = content;
  this.check = Boolean(check);
  this.time = new Date();
}

TodoItem.prototype.getTime = function() {
  this.time.toDateString();
};

TodoItem.prototype.toggle = function() {
  this.check = !this.check;
};

export default TodoItem;
