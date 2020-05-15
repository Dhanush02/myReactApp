import React, { Component } from 'react'

export default class message extends Component {
   
    render() {
        return (
            <div>
                <div className="circle"></div>
				    <span className="time">{this.props.data.time}</span>
				    <p><b>{this.props.data.para}</b> {this.props.data.seen}</p>
            </div>
        )
    }
}
