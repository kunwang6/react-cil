import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
            <h3>我是Home内容</h3>
            <div>
                <ul class="nav nav-tabs">
                  <li>
                    <a class="list-group-item" href="./home-news.html">News</a>
                  </li>
                  <li>
                    <a class="list-group-item active" href="./home-message.html">Message</a>
                  </li>
                </ul>
                <div>
                  <ul>
                    <li>
                      <a href="/message1">message001</a>&nbsp;&nbsp;
                    </li>
                    <li>
                      <a href="/message2">message002</a>&nbsp;&nbsp;
                    </li>
                    <li>
                      <a href="/message/3">message003</a>&nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
              </div>
        )
    }
}
