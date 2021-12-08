/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import Serach from './components/serach'
import List from './components/list'

export default class App extends Component {
  render() {
    return (
       <div className="container">
         <Serach/>
         <List/>
        </div>
    )
  }
}
