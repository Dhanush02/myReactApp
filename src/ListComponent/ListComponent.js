import React, { Component } from 'react'

export default class ListComponent extends Component {
    render() {
        return (
            <div>
                {/* <p>{this.props.data.title}</p> */}
                <img src={this.props.data.url} alt="" height={60} width={60}/>
            </div>
        )
    }
}
