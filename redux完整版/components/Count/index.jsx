import React, { Component } from 'react'
import { Select, Space ,Button} from 'antd';
import { store } from '../../redux/store'
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
class Count extends Component {

  //检测redux状态，只要变化就调用render
// componentDidMount() {
//   store.subscribe(()=>{
//     this.setState({})
//   })
// }

  increment=()=>{
    const {value}=this.selectNumber
    store.dispatch(createIncrementAction(value*1))
  }
  decrement=()=>{
    const {value}=this.selectNumber
    store.dispatch(createDecrementAction(value*1))
  }
  incrementIfOdd=()=>{
    const {value}=this.selectNumber
    const count = store.getState()
    if (count % 2 ==0) return
    store.dispatch(createIncrementAction(value*1))
  }
  incrementAsync=()=>{
    const {value}=this.selectNumber
   setTimeout(()=>{
     store.dispatch(createIncrementAction(value*1))
   },500)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
        <select ref={c=>this.selectNumber=c}>
          <option value="">请选择</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Space wrap>
          <Button onClick={this.increment}>+</Button>
          <Button onClick={this.decrement}>-</Button>
          <Button onClick={this.incrementIfOdd}>当前求和为奇数再加</Button>
          <Button onClick={this.incrementAsync}>异步加</Button>
        </Space>
      </div>
    )
  }
}

export default Count