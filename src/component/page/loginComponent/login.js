import React, { Component } from 'react'
import Login from '../../pages/button/input'
import Button from '../../pages/button/button'
import { withRouter } from 'react-router-dom'
import './login.css'
import GoogleComponent from './googleComponent'
 class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             result:''
        }
    }
    // componentDidMount(){
    //     localStorage.getItem('email')
    //     this.props.myProps()
    // }
    // componentWillUnmount(){
    //     this.props.myProps()
    // }
    onLoadInput = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    submitHandler = () => {
        if(this.state.email==='dhanukarthick15@gmail.com' && this.state.password==='444'){
            const log = localStorage.setItem('email',this.state.email);
            console.log(log);
            this.props.history.push('/home');
        }else{
            alert("Iccorrect Username or Password")
            this.setState({
                result:'false'
            })
        }
    }
    render() {
        return (
            <div>
<div className="global-container">
    <div className="card login-form">
	    <div className="card-body">
		    <h3 className="card-title text-center">Login to <span className="span">YOUTUBE</span></h3>
		        <div className="card-text">
			        <hr/>
			            <form>
				            <div className="form-group">
					        <label >Email address</label>
					        <Login
                                label='E-Mail'
                                type='email'
                                name='email'
                                changaHandler={this.onLoadInput}
                            />
				            </div>
				            <div className="form-group">
					        <label>Password</label>
				            <Login
                            label='Password'
                            type='password'
                            name='password'
                            changaHandler={this.onLoadInput}
                            />
                             <p >Forgot password?</p>
				        </div>
                    <Button
                    variant='contained'
                    color='secondary'
                    value='LOGIN'
                    validateHandler={this.submitHandler}
                    />
				<hr/>
                <GoogleComponent/>
				<div className="sign-up">
					<p className="card-title">Don't have an account?</p> Create One
				</div>
			</form>
		</div>
	</div>
</div>
</div>
</div>
        )
    }
}
export default withRouter(login);