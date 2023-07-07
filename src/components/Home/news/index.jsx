import React, { Component } from 'react'
import Detli from './Detli'
import { Link,Route } from 'react-router-dom'
class News extends Component {
  state={
    DetliList:[
      {
        id:'01',
        name:'张飞'
      }
    ]
  }
  render() {
    const {DetliList} = this.state
    return (
      <div>
        <ul>
          {
            DetliList.map(e=>{
              return (
               <li key={e.id}>
                 <Link to={`/home/news/detli/${e.id}/${e.name}`}>{e.name}</Link>
               </li>
                )
            })
          }
        </ul>

       <Route path='/home/news/detli/:id/:name' component={Detli}></Route>
      </div>
    )
  }
}

export default News