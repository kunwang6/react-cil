import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'


export default class App extends Component {
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'喝水',done:false},
    {id:'003',name:'睡觉',done:false},
  ]}
  add = (todoobj)=>{
    const {todos} = this.state
    const newtodos = [todoobj,...todos]
    this.setState({todos:newtodos})
  }

  //跟新一个tido对象
  changeTodo=(id,p)=>{
    //获取状态的todos
    const {todos} = this.state
    const newtodos =  todos.map((item)=>{
      if(item.id===id) return {...item,done:p}
      else return item
    })
    this.setState({todos:newtodos})
    // todos.forEach((item)=>{
    //   if(item.id===id){
    //     this.setState({done:p})
    //   }else return
    // })
  }

  deleteTodo = (id)=>{
    const {todos} = this.state
    const newtodos = todos.filter(item=>{
      return item.id!==id
    })
    this.setState({todos:newtodos})
  }
  checkAll = (done)=>{
    const {todos} = this.state
    const newtodos = todos.map(item=>{
      return {...item,done}
    })
    this.setState({todos:newtodos})
  }
  //清楚所有已经完成的任务的回调
  deleteDoneTodos = ()=>{
    const {todos} = this.state
    const newtodos = todos.filter(item=>{
      return item.done===false
    })
    this.setState({todos:newtodos})
  }


  

    render() {
        return (
            <div className="todo-container">
            <div className="todo-wrap">
              <Header add = {this.add}/>
              <List todos={this.state.todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo}/>
              <Footer todos={this.state.todos} checkAll={this.checkAll} deleteDoneTodos={this.deleteDoneTodos}/>
            </div>
          </div>
        )
    }
}