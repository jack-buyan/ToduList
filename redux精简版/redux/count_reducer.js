
const initState =0 //初始化状态
export default function counrReducer(preState=initState,action){

  const {type,data} = action
  switch (type) {
    case 'increment':

      return preState + data

    case 'decrement':
      return preState - data
    default:
      return preState
  }
}