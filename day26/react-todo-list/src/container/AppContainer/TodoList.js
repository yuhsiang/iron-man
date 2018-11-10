import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const {
      list,
      handleUpdate,
      handleDelete,
    } = this.props;

    return (
      <ul>
        {
          list.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))
        }
      </ul>
    )
  }
}

TodoList.defaultProps = {
  list: [{
    id: 1,
    checked: false,
    name: 'test'
  }, {
    id: 2,
    checked: true,
    name: 'done'
  }]
}
export default TodoList;
