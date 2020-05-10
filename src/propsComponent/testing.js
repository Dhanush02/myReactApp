import React, { Component } from 'react'
import './props.css'
export default class testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date:new Date(),
            time:this.props.testProps.timing,
            Nam:''
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
        
      }
      tick(){
          this.setState((props,state)=>({
              date:new Date(),
              time:"hello"
              
          })
          )
      }
    render() {
        return (
            
               <div>
                   <div class="container">
                       
                       <img src={this.props.testProps.author.avatarUrl1} alt={this.props.testProps.name} height={100} width={200}/>
                       <p>{this.props.testProps.name}</p>
                       <h6>It is {this.state.date.toLocaleTimeString()}.</h6>
                       <span className="time-left">{this.state.time}</span>
                       <br />
                       <pre>{this.props.testProps.comment}</pre>
                   </div>
                   
                   
               </div>
               
               
        )
        
    }
}
