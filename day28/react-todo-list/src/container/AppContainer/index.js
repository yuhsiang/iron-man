import React from 'react';

import FirebaseService from '../../service/firebase';

import ActionController from './ActionController';
import TodoList from './TodoList';
import LoadingSpinner from './LoadingSpinner';

class Container extends React.Component {
  state = {
    list: [],
    isLoading: false,
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
    })
    FirebaseService.getTodoList()
      .then((list) => {
        this.setState({
          list,
          isLoading: false,
        })
      }) 
  }

  handleUpdate = (id, item) => {
    this.setState({
      isLoading: true,
    })
    FirebaseService.updateTodo(id, item)
      .then((res) => {
        // PureComponent will not work!
        // this.setState(({list}) => {
        //   return {
        //     list,
        //   }
        // })

        this.setState(({list}) => {
          return {
            isLoading: false,
            list: list.map((item) => {
              if (item.id === id) {
                return res;
              }
              return item;
            }),
          }
        })
      })
  }

  handleAdd = (name) => {
    this.setState({
      isLoading: true,
    })
    FirebaseService.addTodo(name, false)
      .then((res) => {
        this.setState(({ list }) => ({
          isLoading: false,
          list: [...list, res],
        }))
      })
  }

  handleDelete = (id) => {
    this.setState({
      isLoading: true,
    })
    FirebaseService.deleteTodo(id)
      .then((res) => {
        this.setState(({ list }) => {
          return {
            isLoading: false,
            list: list.filter((item) => item.id !== id),
          }
        })
      }) 
  }

  render() {
    const {
      list,
      isLoading,
    } = this.state;

    return (
      <div className="container">
        <ActionController
          handleAdd={this.handleAdd}
        />
        <LoadingSpinner isLoading={isLoading}/>
        <TodoList
          list={list}
          handleUpdate={this.handleUpdate}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default Container;
