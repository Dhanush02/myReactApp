import React, { Component } from 'react'
import './div.css'
import CardUpdate from './cardUpdate'
export default class card extends Component {
    constructor(props) {
        super(props)
    this.state = {
             
    }
    }
render() {
        return (
            <div className="container">
  <div className="row">
    <div className="card-deck">
            {this.props.items.map((item,index)=>{
                return <CardUpdate items = {item} key ={index} onClick ={()=> this.props.onPlaying(item)}/>
            })}
      </div>
    </div>
</div>
        )
    }
}
