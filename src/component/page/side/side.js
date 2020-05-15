import React, { Component } from 'react'
import { Link,NavLink  } from "react-router-dom";
import './side.css'

export default class side extends Component {
    render() {
       return (
            <div>
                <div className="sideBar text-center">
                    <ul className = "nav" >
                        <li>
                            <NavLink activeClassName="navbar__link--active"  exact to="/home"><i className="fas fa-home"></i><p >HOME</p></NavLink>
                        </li>
                        <li>
                            <Link to="/playlists"><i className="fas fa-list"></i><p>PLAYLISTS</p></Link>
                        </li>
                        <li>
                            <Link to="/downloads"><i className="fas fa-download"></i><p>DOWNLOADS</p></Link>
                        </li>
                        <li>
                            <Link to="/trending"><i className="fab fa-trello"></i><p>TRENDING</p></Link>
                        </li>
                        <li>
                            <Link to="/notification"><i className="far fa-bell"></i><p>NOTIFICATION</p></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
