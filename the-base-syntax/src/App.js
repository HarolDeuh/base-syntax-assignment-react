import React, { Component } from 'react';
import './App.css';
import UserInput from './Users/UserInput'
import UserOutput from './Users/UserOutput'


class App extends Component {

  state = {
    username: ["Haroldeuh", "Paujprod", "Seny", "Ary"]

  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: [event.target.value, "Lebron", "KD"]
    })
  }
  render() {
    return (
      <div className="App">
        <p>Je suis Harold</p>
        <UserInput change={this.usernameChangeHandler} username={this.state.username[0]} />
        <UserOutput username={this.state.username[0]} />
        <UserOutput username={this.state.username[1]} />
        <UserOutput username={this.state.username[2]} />
      </div>
    );
  }
}

export default App;
