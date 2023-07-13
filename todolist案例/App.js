
import React, { PureComponent} from 'react'
import logo from './logo.svg';
import Header from './component/Header'
import List from './component/List';
import Footer from './component/Footer';
import './App.css';


export default class App extends PureComponent {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name:'敲代码',done: false }
    ]
  }
  //删除方法
  deleteTodo=(id)=>{

  const { todos } = this.state

    const newTodoList = todos.filter((todoObj) => todoObj.id != id)

    this.setState({todos:newTodoList})
  }

  //添加todo
  addTodo=(todoObj)=>{
    const { todos } = this.state
    const newTodoList = [todoObj,...todos]
    this.setState({todos:newTodoList})
  }

  //更新状态
  uploadTodo=(id,done)=>{

    const {todos} = this.state

    const newTodoList = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done };
      else return todoObj;
    })

    this.setState({todos:newTodoList})
  }

  //全选
  checkAll=(done)=>{
    const {todos} = this.state
    const newTodos = todos.map(e=>{
      return {...e,done}
    })
    this.setState({todos: newTodos})
  }

  //清除全部
  clearCheckAll=()=>{
    const {todos} = this.state
    const newTodos = todos.filter(todosObj=>{
      return !todosObj.done
    })
    this.setState({todos:newTodos })
  }

  render() {
    const {todos} = this.state
    return (
        <div className="todo-container">
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}/>
          <List todos={ todos } deleteTodo={this.deleteTodo} uploadTodo={this.uploadTodo}/>
          <Footer todos={ todos } checkAll={this.checkAll} clearCheckAll={this.clearCheckAll}/>
        </div>
      </div>
    )
  }



}

