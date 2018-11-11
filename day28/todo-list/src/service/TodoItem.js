
class TodoItem {
  constructor(id, obj = {}) {
    this.id = id;
    this.name = obj.name;
    this.check = Boolean(obj.check);
    this.time = obj.time;
  }

  getTime() {
    this.time.toDateString();
  }

  toggle() {
    this.check = !this.check;
  }
}

export default TodoItem;
