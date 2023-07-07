import React, { Component } from 'react'
import { Button, Space } from 'antd-mobile'
import {Link,Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
class App extends Component {
  render() {
    return (
      <div>

          <Space wrap>



            <Link to="/about" >
              <Button color='primary' fill='solid'>About</Button>
            </Link>
            <Link to="/home">
              <Button color='primary' fill='solid'>Home</Button>
            </Link>
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