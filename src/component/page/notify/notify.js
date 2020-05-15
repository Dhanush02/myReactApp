import React, { Component } from 'react'
import './notify.css'
import Message from '../notify/message'
export default class notify extends Component {
    render() {
        const data = [
            {
                time:'1.00 AM', 
                para:'Gokul',
                seen: 'posted video and followed back'    
            },
            {
                time:'2.00 AM', 
                para:'Gaju',
                seen: 'posted video and replied back'    
            },
            {
                time:'3.00 AM', 
                para:'Nandha',
                seen: 'posted video and followed back'    
            },
            {
                time:'4.00 AM', 
                para:'Dushanthan',
                seen: 'Followed you and commented back'    
            },
            {
                time:'5.00 AM', 
                para:'Vasanth',
                seen: 'posted video and subscribed you bsck'    
            },
            {
                time:'1.00 AM', 
                para:'Dhanush',
                seen: 'posted video and followed back'    
            },
            
        ]
        const notifi = data.map((e,index)=><Message key={index} data ={e}/>)
        return (
            <div>
                <div className="frame">
  <div className="panel">
    <div className="header flex">
			<div className="menu-icon">
				<div className="dash-top"></div>
				<div className="dash-bottom"></div>
				<div className="circle circle-1"></div>
			</div>
			    <span className="title text-center">Notifications</span>
		    </div>
		
		<div className="notifications clearfix">
			<div className="line"></div>
			    <div className="notification">
                {notifi}
			    </div>
		    </div>
        </div>
    </div>
</div>
        )
    }
}
