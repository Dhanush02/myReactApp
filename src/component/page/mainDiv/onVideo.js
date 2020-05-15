import React, { Component } from 'react'

export default class onVideo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <div className="card">
                    <iframe src={`https://www.youtube.com//embed/${this.props.id}`} title="iframe"allowFullScreen frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
                </div>
            </div>
        )
    }
}
