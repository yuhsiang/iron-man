import React from 'react';

const ActionController = () => (
  <form className="form-inline mt-3 mb-3">
    <div className="form-group">
      <label className="sr-only">Todo</label>
      <input className="form-control" type="text" id="todo-input" placeholder="待辦事項"></input>
    </div>
    <button className="btn btn-primary ml-3" id="addTodo">新增</button>
  </form>
)

export default ActionController;
