import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {mouse:false}
    handlemouse = (falg)=>{
        return ()=>{
            this.setState({mouse:falg})
        }

    }
    //勾选取消勾选某一个tode的回调
    handlCheck=(id)=>{
        return (e)=>{
            
            this.props.changeTodo(id,e.target.checked)
        }
    }

    handleDelete = (id)=>{
        return ()=>{
            this.props.deleteTodo(id)
        }
    }
    render() {
        const {id,done,name} = this.props
        return (
            <div>
                {/*鼠标移入变成true 鼠标移出 变成false*/}
                 <li style={{backgroundColor:this.state.mouse ? '#ddd':'white'}} onMouseEnter={this.handlemouse(true)} onMouseLeave={this.handlemouse(false)}>
                  <label>
                    <input type="checkbox" checked={done} onChange={this.handlCheck(id)}/>
                    <span>{name}</span>
                  </label>
                  <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse ? 'block':'none'}}>删除</button>
                </li>
            </div>
        )
    }
}
