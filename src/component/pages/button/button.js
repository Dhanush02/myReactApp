import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
export default class button extends Component {
    render() {
        return (
            <div>
                <Button variant={this.props.variant} color="secondary" style={{height:'35px',position:'relative',left:'80px'}} onClick={this.props.validateHandler}>
                    <p style={{color:'white'}}>{this.props.value}</p>
                 </Button>
            </div>
        )
    }
}
