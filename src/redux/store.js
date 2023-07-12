//引入createStire,专门用来创建redux中最为核心的store对象
import {configureStore } from '@reduxjs/toolkit'

//引入reducer
import  countReducer from './count_reducer'
export const store = configureStore({
  reducer: countReducer
});

