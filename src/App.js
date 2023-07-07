import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Button, Space } from 'antd-mobile'
import Home from './components/Home'
import About from './components/About'
import MyNavLink from './components/MyNavLink'
class App extends Component {
  render() {
    return (
      <div>
        <Space wrap>
          <MyNavLink to='/about'>About</MyNavLink>
          <MyNavLink to='/home'>Home</MyNavLink>
        </Space>

        <Route path='/about' component={About}/>
        <Route path='/home' component={Home}/>
      </div>
    )
  }
}

export default App