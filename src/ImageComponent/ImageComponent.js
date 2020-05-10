import React, { Component } from 'react'
import PasswordComponent from '../passwordComponent/passwordComponent'
import {Route, withRouter} from 'react-router-dom'
import '../ImageComponent/imageComponents.css'
 class ImageComponent extends Component {
    constructor(props) {
        super();
    
        this.state = {
             data :[
                 {
                     id:'dfgcgdt1223',
                     name:'Dhanush',
                     password:'Dhanush@123'
                 },
                 {
                    id:'ghkatdfe45',
                    name:'Gokul',
                    password:'Gokul*7643'
                }
                
             ],
             ifPassword:false,
             myPass:''
        }
    }
    componentDidMount(){

    }
    
    showPassword = (id) =>{
        const { password } = this.state.data.find(d => d.id === id);
        console.log(password)
        this.setState({
            ifPassword:true,
            myPass:password,
            
        })
        this.props.history.push(`/user/${id}`)

    }
    render() {
        return(
            
            <div className="imgComponent">
                <hr />
                <h4>Image Components</h4>
        <div className = "user">
            {
            this.state.data.map(d=>{
                return <div className ="names" key ={d.id} onClick = {()=> this.showPassword(d.id)}>{d.name}</div>;
            })
            }
        </div>
           
                {
                !this.state.ifPassword ? 'Select name to see password':<Route exact path="/user/:id">
                    <PasswordComponent myProps ={this.state.myPass}/>
                    </Route>
            
    }
        </div>
       )
    }
    

 }
export default withRouter(ImageComponent)