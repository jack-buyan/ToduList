import React, { Component } from 'react'
import qs from 'query-string'
class Detli extends Component {
  render() {
    //获取params参数
    // const {id,name} = this.props.match

    //获取search参数
   const {search} = this.props.location
   const {id,name} = qs.parse(search.slice(1))


    //获取start参数
    const {state} =this.props.location
    return (
      <div>
        名字：{name}
        编号：{id}
      </div>
    )
  }
}

export default Detli