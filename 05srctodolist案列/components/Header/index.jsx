import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    //对接受的props进行类型和必要性的限制
   static propTypes={
    add:PropTypes.func.isRequired
   }
    handleKeyUp = (e)=>{
        if(e.keyCode===13){
            if(e.target.value.trim()===''){
                console.log('输入不能为空');
                return 
            }
           const todoobj = {id:nanoid(),name:e.target.value,done:false}
            this.props.add(todoobj)
            e.target.value = ''
        }
        return
    }
    
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
              </div>
        )
    }
}
