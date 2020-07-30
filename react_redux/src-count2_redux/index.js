/*
 * @Descripttion: 
 * @version: 
 * @Author: leifxie
 * @Date: 2018-01-10 15:21:21
 * @LastEditors: leifxie
 * @LastEditTime: 2020-07-30 15:16:56
 * @FilePath: \react-demo-code\react_redux\src\index.js
 */ 
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'

import App from './components/app'
import {counter} from './redux/reducers'

// 根据counter函数创建store对象
const store = createStore(counter)

// 定义渲染根组件标签的函数
const render = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  )
}
// 初始化渲染
render()
// -count2_redux
// 注册(订阅)监听, 一旦状态发生改变, 自动重新渲染
store.subscribe(render)


