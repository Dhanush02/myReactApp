import React, { Component } from 'react'
import './div.css'
export default class cardUpdate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
    render() {
        return (
            <div >
              <div class="card">
                <img src={this.props.items[3]} alt="image"/>
         {/* <iframe class="embed-responsive-item" src={this.props.data.src} allowFullScreen frameBorder='0' allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
        <div class="card-block">
          <h6 class="card-title text-center teext">{this.props.items[1]}</h6>
          <p class="card-text para">{this.props.items[2]}</p>
          <p class="card-text"><small class="text-muted">{this.props.items[0]}</small></p>
        </div>
      </div>
  
</div>         
            
        )
    }
}
