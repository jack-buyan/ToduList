// 引入组件
import CountUi from '../components/Count'

//引入connect用于链接UI组件和redux
import { connect } from 'react-redux'
//使用connect()()创建并暴露一个Count的容器组件


//a函数返回的对象中的key就作为传递给ui组件props的key，value就作为传递给ui组件prop说的value---状态
function a(state) {

  return { count: state }
}

function b() {

  return { jia: () => { console.log(1) } }
}
export default connect(a, b)(CountUi)