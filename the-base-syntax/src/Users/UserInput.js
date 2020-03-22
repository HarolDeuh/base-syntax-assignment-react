import React, { Component } from 'react'
import './Users.css'

class UserInput extends Component {
    render() {
        return (
            <div className="UserInput">
                <p>Je suis UserInput et mon pseudo est :  {this.props.username} </p>
                <input type="text" onChange={this.props.change} value={this.props.username} />
            </div>
        )
    }
}

export default UserInput;