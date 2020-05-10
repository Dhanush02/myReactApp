import React, { Component } from 'react'
import Axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import RestaurentApi from '../components/restaurentApi'
export default class zomatoApi extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             locationData:[],
             individual_location:'',
             
        }
    }
    textChange =(event) =>{
 
        this.setState({
            name:event.target.value
        },async()=>{
            const data = await Axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${this.state.name}&count=10`,{
            headers:{
                "user-key": "b22a3e7d4da69ea74c7058bb51c786af"}})
                this.setState({locationData:data.data.location_suggestions})
                console.log(data)
            })
            
        }
        sendLocation = (e, value) => {
            this.setState({
              individual_location: value,
              
            },() =>{
                console.log(value)
            })
            // console.log(this.state.individual_location.value)
          };
    render() {
       
        return (
            <div className="container">
                 <Autocomplete
                 
          onChange={this.sendLocation}
        id="free-solo-demo"
        freeSolo
        options={this.state.locationData}
        getOptionLabel={(option)=>option.title}
        style = {{width:300}}
        renderInput={(params) => (
          <TextField {...params} label="Enter Location" margin="normal" variant="outlined" onChange={this.textChange}/>
        )}
      />
      
      <RestaurentApi location={this.state.individual_location} />
            </div>
            
        )
    }
}
