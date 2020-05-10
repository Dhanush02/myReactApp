import React, { Component } from 'react'

export default class passwordComponent extends Component {
    render() {
        return (
            <div>
                <hr />
                <h4>Password Component</h4>
                <h6>THE USER PASSWORD IS =>{this.props.myProps}</h6>
            </div>
        )
    }
}
