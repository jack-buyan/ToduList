import React, { Component } from 'react'
import Search from './components/search'
import List from './components/list'

export default class App extends Component {
  state = {users:[]}
  saveUsers = (users) => {
 
    this.setState({users})
  }
  render() {
    const {users} = this.state
    return (
      <div className='container'>
        <Search saveUsers={ this.saveUsers} />
        <List users={ users} />
      </div>
    )
  }
}
