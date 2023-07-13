import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    //命民空间，name值会作为action type前缀
    name: 'counter',
    //初始化数据
    initialState: {
        count:0
    },
    // 1.定义reducer更新状态函数 2.组件中dispatch 使用的action函数
    reducers: {
        add(state,action) {
      
            state.count++
        },
        sub(state) {
            
            state.count--
        }
    }

})

//导出action函数
export const { add,sub } = counter.actions

//处理异步请求
export const subAsy = (paylod) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(sub())
        },3000)
    }
    
}
export default counter.reducer