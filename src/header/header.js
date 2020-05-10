

import React, { Component } from 'react'
import './header.css';
import NavList from '../header/navList'
export default class Header extends Component {
  render(props) {
    const data = [
      {
      
      icon:<i className="fas fa-fw fa-tachometer-alt"></i>,
      name:"Dashboard",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fab fa-app-store"></i>,
      name:"Application",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fas fa-envelope-open-text"></i>,
      name:"Mailbox",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      
      icon:<i className="fas fa-file"></i>,
      name:"Pages",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      title:"User Interface",
      icon:<i className="fab fa-accessible-icon"></i>,
      name:"Component",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fas fa-align-justify"></i>,
      name:"Content",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fas fa-book-open"></i>,
      name:"Utilities",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fas fa-table "></i>,
      name:"Icons",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fab fa-wpforms"></i>,
      name:"Forms",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fas fa-table"></i> ,
      name:"Tables",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon: <i class="fas fa-dungeon"></i>,
      name:"Charts",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon: <i class="fas fa-dungeon"></i>,
      name:"Maps",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon:<i className="fas fa-table"></i> ,
      name:"Authentication",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      title:"EXTRA",
      icon:<i className="fas fa-ring"></i>,
      name:"Multilevel",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    {
      icon: <i className="fas fa-power-off"></i>,
      name:"Logout",
      icon2:<i className="fas fa-chevron-right"></i>
    },
    
  ]
    const list = data.map((e)=> <NavList data ={e}/>)
    return (
      
        <div className="wrapper">
           <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
           <a className="sidebar-brand d-flex align-items-center justify-content-center" href="">
        <div className="sidebar-brand-icon rotate-n-15">
          
        </div>
        <div className="sidebar-brand-text p-0 text-center" >
          <h1 className="fam"><span className="in-text" >Famosa</span>Admin</h1>
        <img src="https://html.psdtohtmlexpert.com/admin/famosa-admin/images/user5-128x128.jpg"height="50" width="50"  />
        <h5 className="john">John deo</h5>
        <button><i className="fas fa-circle"></i>&nbsp;&nbsp;online</button><br/>
        <br/>
        </div>
      </a>
      
          </ul>
          {list}
  </div>
    )
  }
}