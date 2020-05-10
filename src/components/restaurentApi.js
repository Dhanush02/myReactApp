import React, { Component } from 'react'
import Axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Pagination from '@material-ui/lab/Pagination';
import './index.css'
export default class restaurentApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            data:[],
            nameRestaurant:'',
            pageCount:0,
            pageData:10,
            entity_id:this.props.location.entity_id,
            entity_type:this.props.location.entity_type,
        }
    }
    componentDidMount = () =>{
      const pageCount = this.state.data.length /2;
      const pageData = this.state.data.splice(0,2);
      this.setState({
        pageData,
        pageCount
      })
    }
    fetchData = (e,p) =>{
      const pageData = this.state.data.splice((p*2),p*2);
      this.setState({
        pageData
      })
    }
  
    FindLocation =(e,value)=>{
      if(value){
        this.setState({
          data:[{...value}],
        })
        console.log(this.state.data)
      }}
    clickHandler=()=>{
    const displayList= this.state.data.map((datas,index)=>{
    console.log(this.state.data)
    return(

      
<div className="container-fluid">
<div className="row">
<div className="col-12 mt-3">
    <div className="card">
        <div className="card-horizontal" style={{width:'100%'}}>
            <div className="img-square-wrapper">
              <img src={datas.restaurant.thumb}/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{datas.restaurant.name}</h4>
                <p className="card-text">Address:{datas.restaurant.location.address}</p>
                <pre className="card-title">Cuissines:{datas.restaurant.cuisines}</pre>
                <span class="badge badge-primary">{datas.restaurant.user_rating.aggregate_rating}</span>
            </div>
        </div>
        <div className="card-footer">
            <small className="text-muted">Timing:{datas.restaurant.timings}</small>
        </div>
    </div>
</div>
</div>
</div>
)
})
this.setState({
    display:displayList,
})
}
    changeHandler =  (e) => {
      e.preventDefault();
        this.setState({
          name: e.target.value,
        },async()=>{
          const response = await Axios.get(
            `https://developers.zomato.com/api/v2.1/search`,
             {
               headers: {
                 "user-key": "b22a3e7d4da69ea74c7058bb51c786af",
                 Accept: "application/json",
       
               },
               params : {
                 entity_id: this.props.location.entity_id,
                 entity_type:this.props.location.entity_type,
                 q:this.state.name,
                }
             }
    
           );
           const data = response.data;
           this.setState({ data:data.restaurants});
           console.log(this.state.data);
        });
      };
    render() {
      console.log(this.state.data)

        return (
            <div className="container">
              {this.state.pageCount ? this.state.data.map((d)=>{
return<p>{d.name}</p>
              }):''}
                    <Autocomplete
        onChange={this.FindLocation}
        id="free-solo-demo1"
        freeSolo
        options={this.state.data}
        getOptionLabel={(option) => option.restaurant.name}
        style = {{width:450}}
        renderInput={(params) => (
          <TextField {...params} label="Enter Restaurent Name" margin="normal" variant="outlined" onChange={this.changeHandler}/>
        )}
      />
      <button className="bg" onClick={this.clickHandler}>SEARCH</button>
      <br />
      <br />
          <div>
              {this.state.display}
          </div>
          <Pagination count={this.state.pageCount} color="primary" onChange={(e,p) => this.fetchData}/>
            </div>
        )
    }
}