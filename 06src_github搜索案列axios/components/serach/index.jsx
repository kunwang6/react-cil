import React, { Component } from 'react'
import axios from 'axios';

export default class Serach extends Component {

    search = ()=>{
        const {value} = this.input
        //发送请求前通知app跟新状态
        this.props.updateAppState({isFirst:false,isLoading:true})
        axios.get(`/search/users?q=${value}`).then(
            response=>{
                //请求成功后通知app跟新状态
                this.props.updateAppState({isLoading:false,users:response.data.items})
                //console.log(response.data);
             
            },
            error=>{
                //请求失败后通知app跟新状态
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }
    render() {
        return (
        <section className="jumbotron">
            <h3 className="jumbotron-heading">搜索github用户</h3>
            <div>
                <input ref={c=>{this.input = c}} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                <button onClick={this.search}>搜索</button>
            </div>
        </section>
        
        )
    }
}
