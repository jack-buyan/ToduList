import React, { Component } from "react";
import './header.css'

export default class Header extends Component {
    handleKeyUp=(event)=>{
       const {keyCode,target} = event
        if (keyCode !== 13) return
        if (target.value.trim() === "") return alert("任务名称不能为空")
        const todoObj = { id: Date.now(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        target.value = ""
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }

}