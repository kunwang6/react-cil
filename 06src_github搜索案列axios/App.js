/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Serach from './components/serach'
import List from './components/list'

export default class App extends Component {
  state = {
    users:[], //users初始值为数组
    isFirst:true, //是否为第一次打开页面
    isLoading:false,//标识是否加载中
    err:''
  } //初始化状态
  //跟新app的state
  updateAppState = (stateobj)=>{
    this.setState(stateobj)
  }
  
  render() {
    return (
      
       <div className="container">
         <Serach updateAppState={this.updateAppState}/>
         <List {...this.state}/>

      
  </div>
      
    )
  }
}
