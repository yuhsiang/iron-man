import React from 'react';
import ActionController from './ActionController';
import TodoList from './TodoList';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <ActionController />
        <TodoList />
      </div>
    )
  }
}

export default Container;
