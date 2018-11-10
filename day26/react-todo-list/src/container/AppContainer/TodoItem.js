import React from 'react';

const getCheckedClass = (checked) =>  checked ? 'list-group-item-dark' : '';
class TodoItem extends React.Component {
  handleOnClick = (evt) => {
    const {
      item,
      handleUpdate,
    } = this.props;
    item.check = !item.check;
    handleUpdate(item.id, item);
  }

  handleOnDelete = (evt) => {
    const {
      item,
      handleDelete,
    } = this.props;

    // 記得這個因為上層有更新的 code 所以用這個避免刪除時冒泡上去被更新
    evt.stopPropagation();
    handleDelete(item.id);
  }
  render() {
    const {
      item,
    } = this.props;
    return (
      <li
        className={`list-group-item list-group-item-action ${getCheckedClass(item.check)}`}
        onClick={this.handleOnClick}
      >
        <span className="todo-content">{item.name}</span>
        <span className="close" onClick={this.handleOnDelete}>x</span>
      </li>
    );
  }
}

export default TodoItem;
