import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink  } from "react-router-dom";
class search extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="d-flex">
                 <div className="div-width" >
                    <TextField id="standard-basic" label="SEARCH FOR VIDEOS" className="some-class" onChange={this.props.inputChange} style={{ width: 300 }}/>
                </div>
                <NavLink to='/home'>
                    <Button variant="contained" color="secondary" onClick={this.props.getData} className="bt">
                    Search
                    </Button>
                </NavLink>
            </div>
        )
    }
}

export default search
