// import React, { Component } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { add,subAsy} from "./store/modules/counter";



function App() {
  const dispatch = useDispatch()
  const { count } = useSelector(state => state.counter)

  return (
    <div>
      <ul>
        <li>{count}</li>
        <li onClick={()=>{dispatch(add())}}>
          <button>add</button>
        </li>
        <li onClick={()=>{dispatch(subAsy())}}>
          <button>sub</button>
        </li>
      </ul>
    </div>
  )
}

export default App
