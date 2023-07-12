import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { DatePicker, Space,ConfigProvider,Button,Radio } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import Home from './components/Home'
import About from './components/About'
import MyNavLink from './components/MyNavLink'
import Header from './components/Header'
class App extends Component {


  onChange=(date, dateString)=>{
    console.log( dateString)
  }
  render() {
    return (
      <div>

        {/*自定义主题颜色*/}
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: '#00b96b',
              },
            },
          }}
        >
          <Button type='primary'>按钮</Button>
          <Radio>单选框</Radio>
          <Header/>
          <Space wrap>
            <MyNavLink to='/about'>About</MyNavLink>
            <MyNavLink to='/home'>Home</MyNavLink>
          </Space>
          <WechatOutlined />
          <DatePicker onChange={this.onChange} />
          <Route path='/about' component={About}/>
          <Route path='/home' component={Home}/>
        </ConfigProvider>
      </div>
    )
  }
}

export default App