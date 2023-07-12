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

  pushShow=(id,name)=>{
   this.props.history.push(`/home/news/detli/?id=${id}&name=${name}`)
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
                 {/*像路由器传递params参数*/}
                 {/*<Link to={`/home/news/detli/${e.id}/${e.name}`}>{e.name}</Link>*/}

                 {/*向路由传递search参数*/}
                 {/*<Link to={`/home/news/detli/?id=${e.id}&name=${e.name}`}>{e.name}</Link>*/}


                 <button onClick={()=>this.pushShow(e.id,e.name)}>push跳转</button>

               {/* 传递start参数*/}
                 <Link to={{pathname:'/home/news/detli',state:{id:e.id,name:e.name}}}>{e.name}</Link>
               </li>
                )
            })
          }
        </ul>

       {/* 声明接收params参数*/}
       {/*<Route path='/home/news/detli/:id/:name' component={Detli}></Route>*/}

      {/* 声明接收search参数*/}
      {/*<Route path="/home/news/detli" component={Detli}></Route>*/}


      {/* 接收state参数*/}
        <Route path="/home/news/detli" component={Detli}></Route>
      </div>
    )
  }
}

export default News