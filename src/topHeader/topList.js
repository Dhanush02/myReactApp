import React, { Component } from 'react'

export default class topList extends Component {
    render() {
        return (
            <div>
                <div class="cards p-4 d-flex">
                    <div class="d-flex justify-content-between">
                        <h5>{this.props.data.num1}</h5>
                        <button class="btn btn-primary percentage">{this.props.data.num2}</button>
                    </div>
                    <h1>{this.props.data.num3}</h1>
                    <p class="text-muted">{this.props.data.num4}</p>
                </div>
            </div>
        )
    }
}


