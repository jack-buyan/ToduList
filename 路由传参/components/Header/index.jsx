import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {

  pushShow=(id,name)=>{
    console.log(this.props.history)
    this.props.history.push(`/home/news/detli/?id=${id}&name=${name}`)
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.pushShow(1,'张飞')}>push跳转</button>
      </div>
    )
  }
}

export default withRouter(Header)