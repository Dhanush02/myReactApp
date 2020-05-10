import React, { Component } from 'react'
import NavCom from '../side/NavCom'
import './side.css'
export default class side extends Component {
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
                <div className="sideBar text-center">
                         <ul className = "nav" >
                             {list}
                         </ul>
                   </div>
            </div>
        )
    }
}
