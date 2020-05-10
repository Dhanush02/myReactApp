import React, { Component } from 'react'

export default class NavCom extends Component {
    render() {
        return (
            <div>
                <li>
                    {this.props.data.icon}<a href="" >{this.props.data.name}</a>
                </li> 
            </div>
        )
    }
}
