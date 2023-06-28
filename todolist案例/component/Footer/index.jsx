import React, { Component } from 'react'
import './footer.css'
export default class Footer extends Component {

  handleCheckAll=(event)=>{
    console.log(event.target.checked)
    this.props.checkAll(event.target.checked)
  }

  //清除全部
  clearAll=()=>{
    this.props.clearCheckAll()
  }
    render() {
      const {todos} = this.props
      //已完成的个数
      const doneCount = todos.reduce((pre,todos)=>pre + (todos.done ? 1 :0),0)

      //总数
      const total = todos.length

        return (
            <div className='todo-footer'>
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll}  checked={doneCount === total && total ? true :false }/>
                </label>
                <span>
                    <span>已完成 {doneCount}</span> /全部 {total}
                </span>
                <button className='btn btn-danger' onClick={this.clearAll}>清除已完成任务</button>
            </div>
        )


    }
}
