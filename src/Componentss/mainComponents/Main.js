import React, { Component } from 'react'
// import './main.css'
import NavCom from './navCom'
import TopSearch from '../mainComponents/topSearch'

import Content from '../mainComponents/content'
export default class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const data = [
            {
            icon:<i class="fas fa-home"></i>,
            name:"HOME",
            },
            {
                icon:<i class="fas fa-list"></i>,
                name:"PLAYLISTS",
                },
                {
                    icon:<i class="fas fa-video"></i>,
                    name:"VIDEOS",
                    },
                    {
                        icon:<i class="fas fa-download"></i>,
                        name:"DOWNLOADS",
                        },
                        {
                            icon:<i class="fab fa-trello"></i>,
                            name:"TRENDING",
                            },
                            {
                                icon:<i class="far fa-bell"></i>,
                                name:"NOTIFICATION",
                                },
            
        ]
        const list = data.map((e)=> <NavCom data ={e}/>)
        return (
            <div>
                <div className="container-fluid p-0">
                   <div className="sideBar text-center">
                         {/* <img src="https://i.pinimg.com/originals/6c/de/6a/6cde6ad49f137539b1d05c6ac6ea16c4.png" className="" alt="youtube" height={80}/>
                         <hr /> */}
                         <ul className = "nav" >
                             {list}
                         </ul>
                   </div>
                  
                </div>
              
            </div>
         )
    }
}




 {                     }