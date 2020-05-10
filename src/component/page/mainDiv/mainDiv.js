import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Axios from 'axios'
export default class mainDiv extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name:"",
            data:[],
        }
    }
    changeHandler =  (e) => {
        e.preventDefault();
          this.setState({
            name: e.target.value,
          },async()=>{
            const response = await Axios.get(
              // `https://www.googleapis.com/youtube/v3/search`,
               {
                
                params: {
                    part: "snippet",
                    maxResults: 1,
                    // key: `AIzaSyD3scXpItuWsVCrmNEcMMCYojMjQVKH-cQ`,
                    q: this.state.name,
                  }
               }
      
             );
             const data = response.data;
             console.log(data);
             this.setState({ data:data.items});
             console.log(this.state.data);
          });
        };
    render() {
        // console.log(this.state.data)

        return (
            <div>
<Autocomplete
        
        id="free-solo-demo1"
        freeSolo
        options={this.state.data}
        getOptionLabel={(option) => option.snippet.title}
        style = {{width:450}}
        renderInput={(params) => (
          <TextField {...params} label="Search" margin="normal" variant="outlined" onChange={this.changeHandler}/>
        )}
      />
            </div>
        )
    }
}
