import React, { Component } from 'react'
import './Users.css'

class UserOutput extends Component {
    render() {
        return (
            <div className="UserOutput">
                <p>Mon username : {this.props.username}</p>

                <p>Paragraphe 1</p>
                <p>Paragraphe 2</p>

            </div>
        )
    }
}

export default UserOutput;