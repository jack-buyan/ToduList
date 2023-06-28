import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
// import './List.css'
import './list.css'
export default class List extends Component {
  //props限制
  static propTypes = {
    todos:PropTypes.array.isRequired,
    uploadTodo:PropTypes.func.isRequired
  }
  render() {

    const { todos,deleteTodo,uploadTodo } = this.props
    return (
      <ul className='todo-main'>
        {
          todos.map(item => {
            return <Item key={item.id} {...item} deleteTodo={deleteTodo} uploadTodo={uploadTodo}/>
          })
        }
      </ul>
    )
  }
}
