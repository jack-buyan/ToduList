import React, { Component } from "react";
import './item.css'
export default class item extends Component {

    handleMouse=(flag)=>{
        return (event)=>{
            this.setState({mouse:flag})
        }
    }

    //删除按钮回调
    handleDelete=(id)=>{

        if (window.confirm('确定要删除么')){
            this.props.deleteTodo(id)
        }
    }

    //更新状态
    handleCheck=(id)=>{

        return (event)=>{
            this.props.uploadTodo(id,event.target.checked)
        }
    }
    state={mouse:false}
    render() {
        const { name, id, done } = this.props
        const {mouse} = this.state
        return (

            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{background:mouse ? "#eee" : "#fff"}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? 'block':'none' }} onClick={()=>this.handleDelete(id)}>删除</button>
            </li >


        )
    }
}