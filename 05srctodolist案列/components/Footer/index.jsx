import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleChange = (e)=>{
    this.props.checkAll(e.target.checked)
  }
  //清楚所有已经完成的任务
  handleClearAll= ()=>{
    this.props.deleteDoneTodos()
  }
    render() {
      const {todos} = this.props
      //已完成的个数
      // const wctodos = todos.filter(item=>{
      //   return item.done!==false
      // })
      // const wcCounts = wctodos.length
      const doneCount = todos.reduce((pre,todo)=>{return pre + (todo.done ? 1 : 0)},0)

      //总数
      const Count = todos.length
        return (
            <div className="todo-footer">
                <label>
                  <input type="checkbox" onChange = {this.handleChange} checked={doneCount === Count&&Count!==0? true :false}/>
                </label>
                <span>
                  <span>已完成{doneCount}</span> / 全部{Count}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
              </div>
        )
    }
}
