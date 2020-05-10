import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
export default class topSearch extends Component {
    render() {
        return (
            <div>
              <nav className="navbar ">
  <form class="form-inline">
  <i class="fas fa-search" style={{paddingRight:'20px'}}></i>
  <Autocomplete
  id="combo-box-demo"
  
  getOptionLabel={(option) => option.title}
  style={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>
   
  </form>
</nav>
            </div>
        )
    }
}
