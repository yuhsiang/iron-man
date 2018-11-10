import React from 'react';

class ActionController extends React.Component {
  inputNode = null;
  inputRefSetup = (inputNode) => {
    this.inputNode = inputNode
  }

  handleOnCreateClick = (evt) => {
    const {
      handleAdd,
    } = this.props;
    
    handleAdd(this.inputNode.value)
    evt.preventDefault();
  }

  render() {
    return (
      <form className="form-inline mt-3 mb-3">
        <div className="form-group">
          <label className="sr-only">Todo</label>
          <input
            className="form-control"
            ref={this.inputRefSetup}
            type="text"
            id="todo-input" placeholder="待辦事項"
          ></input>
        </div>
        <button
          className="btn btn-primary ml-3"
          id="addTodo"
          onClick={this.handleOnCreateClick}
        >新增</button>
      </form>
    )
  }
}

export default ActionController;
