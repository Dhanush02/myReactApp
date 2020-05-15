import React, { Component } from 'react'
import './div.css'
import { NavLink  } from "react-router-dom";
export default class cardUpdate extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
render() {
      return (
        <div >
          <NavLink to={`/home/watch/${this.props.items[0]}`}>
              <div class="card" onClick={this.props.onClick}>
                <img src={this.props.items[3]} alt="ima" onClick={this.props.onClick}/>
                  <div class="card-block">
                    <h6 class="card-title text-center teext">{this.props.items[1]}</h6>
                      <p class="card-text para">{this.props.items[2]}</p>
                        <p class="card-text"><small class="text-muted">{this.props.items[0]}</small></p>
                  </div>
              </div>
          </NavLink>
        </div>         
            
        )
    }
}
