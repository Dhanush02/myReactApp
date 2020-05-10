import React, { Component } from 'react'

export default class navList extends Component {
    render() {
        return (
            <div class="nav-item">
                
            <p style={{"color":"grey"}}>{this.props.data.title}</p>
          <a href="#" className="nav-link ">
            <div className="d-flex justify-content-between">
              <div>
            {this.props.data.icon}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <id className="name">{this.props.data.name}</id>
              </div>
              {this.props.data.icon2}
            </div>
          </a>
        </div>
        )
    }
}
