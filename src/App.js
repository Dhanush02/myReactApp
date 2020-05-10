import React, { Component } from 'react';
import Head from '../src/component/page/main/head'
import './app.css'
 class App extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
     <div>
       {/* <Main/> */}
       <Head/>
     </div>
    )
  }
}
export default App;