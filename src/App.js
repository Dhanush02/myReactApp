import React, { Component } from 'react';
import Login from '../src/component/page/loginComponent/login'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect} from "react-router-dom";
import Head from '../src/component/page/main/head'
import './app.css'

 class App extends Component {
  constructor(props) {
    super();
    this.state={
      islogin:''
    }
  }
  setLog = ()=>{
    this.setState({
      islogin:localStorage.getItem('email')
    })
  }
  componentDidMount(){
    this.setLog();
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path='/login' render={()=> this.state.islogin ? <Redirect to='/home'/> : <Login myProps={this.setLog}/>}/>
            <Route path='/home' component={Head}/>
            <Route path='/playlists' component={Head}/>
            <Route path='/downloads' component={Head}/>
            <Route path='/trending' component={Head}/>
            <Route path='/notification' component={Head}/>
            <Route path="/" render={()=><Redirect exact to='/login'/>}/> 
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;