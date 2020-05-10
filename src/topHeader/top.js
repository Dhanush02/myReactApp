import React, { Component } from 'react'
import './top.css';
import TopList from '../topHeader/topList'
import topList from '../topHeader/topList';
export default class top extends Component {
    render(props) {
   
        return (
			
            <div className="mainDiv">
				
               <div>
		  <ul className="nav">
			<li className="btn-group nav-item">
				<a href="#" className="waves-effect waves-light nav-link rounded" data-toggle="push-menu" role="button">
                <i className="fas fa-bars"></i>
			    </a>
			</li>
			<li className="btn-group nav-item">
				<a href="#" data-provide="fullscreen" className="waves-effect waves-light nav-link rounded" title="Full Screen">
                <i className="fas fa-object-group"></i>
			    </a>
			</li>
            
		  </ul>
          
	  </div>
      <div className="search-bell">
          <li><i className="fas fa-search"></i>
            <input className="input-field" type="text"/>
          </li>
          <li>
          <i className="fas fa-bell"></i><i className="fas fa-circle-notch notBell"></i>
          
          </li>
      </div>
      <hr></hr>
      
      <section className="content">
      <div className="row">
      <div className="col-lg-3 col-md-6 col-12">
					<div className="box">
						<div className="box-body">
							<div className="d-flex justify-content-between mb-2">
								<div>
									<span className="d-block text-dark font-weight-500">Visits</span>
								</div>
								<div>
									<span className="badge badge-primary badge-sm">+10%</span>
								</div>
							</div>
							<div>
								<span className="d-block car-text mb-2">76.5K</span>
								<small className="d-block">172,422 Target Users</small>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6 col-12">
					<div className="box">
						<div className="box-body">
							<div className="d-flex justify-content-between mb-2">
								<div>
									<span className="d-block  font-weight-500">Users</span>
								</div>
								<div>
									<span className="badge badge-danger badge-sm">+10%</span>
								</div>
							</div>
							<div>
								<span className="d-block car-text mb-2">68M</span>
								<small className="d-block">90M Targeted</small>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6 col-12">
					<div className="box">
						<div className="box-body">
							<div className="d-flex justify-content-between mb-2">
								<div>
									<span className="d-block text-dark font-weight-500">Tickets</span>
								</div>
								<div>
									<span className="badge badge-primary badge-sm">-1.5%</span>
								</div>
							</div>
							<div>
								<span className="d-block car-text mb-2">73</span>
								<small className="d-block">100 Regular</small>
							</div>
						</div>
					</div>
				</div>
                <div className="col-lg-3 col-md-6 col-12">
					<div className="box">
						<div className="box-body">
							<div className="d-flex justify-content-between mb-2">
								<div>
									<span className="d-block text-dark font-weight-500">Users</span>
								</div>
								<div>
									<span className="badge badge-danger badge-sm">+10%</span>
								</div>
							</div>
							<div>
								<span className="d-block car-text mb-2">68M</span>
								<small className="d-block">90M Targeted</small>
							</div>
						</div>
					</div>
				</div>
                </div> 
                <div className="bg ml-2" style={{
                    display:"flex",flexDirection:"row",
                }}>
                    <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className   ="img-fluid" style={{
                        height:"420px",width:"40%",padding:"20px"
                    }}></img>

<div className="bg">
                    <img src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="img-fluid" style={{
                        height:"420px",width:"100vw",padding:"20px"
                    }}></img>
                </div>
                </div>
                
                
                
				
                
                </section>
      
            </div>
        )
    }
}