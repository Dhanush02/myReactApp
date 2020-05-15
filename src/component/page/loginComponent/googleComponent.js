import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class googleComponent extends Component {

    responseGoogle = (response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

render() {
        return (
            <div className='google'>
                <GoogleLogin
                    clientId="462478857535-nhepiqv4u5l27djbtn938babur5uvm40.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_post_origin'}
                />
            </div>
        )
    }
}

export default googleComponent
