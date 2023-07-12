
import {INCREMENT,DECREMENT} from './constant'

// 同步action 返回的是object 一般对象
export const  createIncrementAction = data => ({type:INCREMENT,data})
export const  createDecrementAction = data => ({type:DECREMENT,data})


// 异步action 返回的是函数
export  const createIncrementAsynsAction =(data,time)=>{

  return (dispatch)=>{
    console.log(data,dispatch)
    setTimeout( ()=>{
    dispatch(createIncrementAction(data))
    },time)
  }

}