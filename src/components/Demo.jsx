import React, { useState,useEffect,useRef,useContext,createContext  } from 'react'

import {root} from '../index'
const CountContext = createContext(0);



export default function Demo(){
  const [count,setCount] = useState(0)
  const myRef = useRef()

  const add = function (){
    setCount(count=>count+1)
  }

  const onmount = function (){
    root.unmount()
  }

  const fetch = function (){
   alert(myRef.current.value)
  }

  useEffect(()=>{
    let timer = setInterval(()=>{

      setCount(count=> ++count)
    },1000)

    return () => {
      clearInterval(timer);
    }
  },[])
  return (
    <div>
      值是：{count}

      <CountContext.Provider value={count}>
        <Ab/>
      </CountContext.Provider>

      <input type='text' ref={myRef}/>
      <button onClick={fetch}>获取input值</button>
      <button onClick={add}>add</button>
      <button onClick={onmount}>卸载</button>
    </div>
  )
}

function Ab (){
  const count = useContext(CountContext);
  return <div>   子组件获得的值是：{count}  </div>
}
