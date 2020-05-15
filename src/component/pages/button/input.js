import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
export default class input extends Component {
    
    render() {
        return (
            <div>
                <TextField 
                    style={{width:'250px'}}
                    label={this.props.label}
                    type={this.props.type}
                    name={this.props.name}
                    onChange={this.props.changaHandler}
                />
            </div>
        )
    }
}
