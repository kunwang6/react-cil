import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
  render() {
   
    return (
      <div>
       
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>      
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">


              {/*<a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a>*/}
              {/*在react靠路由连接切组件*/ }
      
             
              <MyNavLink to="/about">About</MyNavLink>
              <MyNavLink to="/home/as">Home</MyNavLink>


            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/*注册路由*/ }
                {/* Switch 包了的话匹配到的话就不会继续往下匹配了 可以提高匹配效率 */}
                  <Switch> 
                  <Route exact path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  </Switch>
              
              </div>
            </div>
          </div>
        </div>
       
      </div>
    )
  }
}
