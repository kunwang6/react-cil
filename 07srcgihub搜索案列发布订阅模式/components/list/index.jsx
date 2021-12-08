/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
  state = {
    users:[], //users初始值为数组
    isFirst:true, //是否为第一次打开页面
    isLoading:false,//标识是否加载中
    err:''
  } //初始化状态

  componentDidMount(){
  this.token =   PubSub.subscribe('kun',(msg,data)=>{
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  } //组件即将被卸载 取消订阅
    render() {
      const {users,isFirst,isLoading,err} =this.state
        return (
        <div className="row">
          {
            isFirst ? <h2>输入关键字，随后点击搜索</h2> : 
            isLoading? <h2>loading.....</h2>:
            err? <h2>{err}</h2>:
            users.map((item,index)=>{
              return (
                <div key={index} className="card">
                  <a href={item.html_url} target="_blank">
                    <img alt='head_portrait' src={item.avatar_url} style={{width: '100px'}}/>
                  </a>
                  <p className="card-text">{item.login}</p>
                </div> 
              )
            })
          }     
        </div>
        )
    }
}
