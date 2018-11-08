import React from 'react';

const getCheckedClass = (checked) =>  checked ? 'list-group-item-dark' : '';

const TodoItem = (props) => {
  const {
    item,
  } = props;
  return (
    <li className={`list-group-item list-group-item-action ${getCheckedClass(item.checked)}`}>
      <span className="todo-content">{item.name}</span>
      <span className="close">x</span>
    </li>
  );
}

export default TodoItem;
