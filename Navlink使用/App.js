import React, { Component } from 'react'
import { Button, Space } from 'antd-mobile'
import {NavLink,Link,Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div>

          <Space wrap>



            <NavLink to="/about" activeClassName="active" className='name'>
              About
            </NavLink>
            <NavLink to="/home" activeClassName="active">
              Home

            </NavLink>
          </Space>

          <div>
            <Route path='/about' component={About}/>
            <Route path='/home' component={Home}/>
          </div>

      </div>
    )
  }
}

export default App