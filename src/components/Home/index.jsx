import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import { Button, Space } from 'antd-mobile'
import MyNavLink from '../MyNavLink'
import Message from './message'
import News from './news'
class Home extends Component {
  render() {
    return (
      <div>
        <Space wrap>
          <MyNavLink to='/home/message'>内容</MyNavLink>
          <MyNavLink to='/home/news'>新闻</MyNavLink>
        </Space>

        <Switch>
          <Route path='/home/message' component={Message}/>
          <Route path='/home/news' component={News}/>
          <Redirect to='/home/message'/>
        </Switch>
      </div>
    )
  }
}

export default Home