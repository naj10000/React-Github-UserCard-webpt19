import React, { Component } from 'react'
import axios from 'axios';
import User from './User';
import Followers from './Followers'
import './App.css'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      user: [],
      follower: []
    }
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/naj10000")
        .then(res => {
          console.log(res.data)
          this.setState({
            user: [res.data]
          })
        })

    axios.get("https://api.github.com/users/naj10000/followers")
        .then(res => {
          this.setState({
            follower: [...res.data]
          })
        })
  }


  render() {
    return (
      <>
      <div>
        <User user={this.state.user} key={this.state.user.id}/>
      </div>
      <div>
        <Followers follower={this.state.follower} key={this.state.follower.id}/>
      </div>
      </>
    )
  }
}

export default App

