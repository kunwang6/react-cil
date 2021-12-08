/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
      const {users,isFirst,isLoading,err} =this.props
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
