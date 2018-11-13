import React from 'react';
import { connect } from 'react-redux';
import ActionController from './ActionController';
import TodoList from './TodoList';
import LoadingSpinner from './LoadingSpinner';

import {
  getList,
  getIsLoading,
} from '../../provider/todo/selector';

import {
  fetchTodoList,
  updateItem,
  addItem,
  deleteItem,
} from '../../provider/todo/action';

class Container extends React.Component {
  componentDidMount() {
    const {
      handleFetchTodoList,
    } = this.props;
    handleFetchTodoList()
  }

  // handleUpdate = (id, item) => {
  //   this.setState({
  //     isLoading: true,
  //   })
  //   FirebaseService.updateTodo(id, item)
  //     .then((res) => {
  //       this.setState(({list}) => {
  //         return {
  //           isLoading: false,
  //           list: list.map((item) => {
  //             if (item.id === id) {
  //               return res;
  //             }
  //             return item;
  //           }),
  //         }
  //       })
  //     })
  // }

  // handleAdd = (name) => {
  //   this.setState({
  //     isLoading: true,
  //   })
  //   FirebaseService.addTodo(name, false)
  //     .then((res) => {
  //       this.setState(({ list }) => ({
  //         isLoading: false,
  //         list: [...list, res],
  //       }))
  //     })
  // }

  // handleDelete = (id) => {
  //   this.setState({
  //     isLoading: true,
  //   })
  //   FirebaseService.deleteTodo(id)
  //     .then((res) => {
  //       this.setState(({ list }) => {
  //         return {
  //           isLoading: false,
  //           list: list.filter((item) => item.id !== id),
  //         }
  //       })
  //     }) 
  // }

  render() {
    const {
      // redux State
      list,
      isLoading,

      // redux action
      handleAdd,
      handleUpdate,
      handleDelete,
      // state 改成 props
    } = this.props;

    return (
      <div className="container">
        <ActionController
          handleAdd={handleAdd}
        />
        <LoadingSpinner isLoading={isLoading}/>
        <TodoList
          list={list}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  // 取得列表
  // 取得讀取狀態
  return {
    list: getList(state),
    isLoading: getIsLoading(state),
  }
};

const mapDispatchToProps = (dispatch) => ({
  handleFetchTodoList: () => dispatch(fetchTodoList()),
  handleUpdate: (id, item) => dispatch(updateItem(id, item)),
  handleAdd: (name) => dispatch(addItem(name)),
  handleDelete: (id) => dispatch(deleteItem(id)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default withConnect(Container);
