import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
class MyNavLink extends Component {

  render() {
    return (
      <div>
        <NavLink activeClassName="active" className='name' {...this.props} />
      </div>
    )
  }
}

export default MyNavLink