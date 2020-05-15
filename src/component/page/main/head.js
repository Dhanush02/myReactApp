import React, { Component } from 'react'
import './head.css'
import Side from '../side/side'
import Axios from 'axios'
import { NavLink, withRouter} from "react-router-dom";
import MainDivision from '../mainDiv/mainDivision';
import Search from '../mainDiv/search';
class head extends Component {
    constructor(props) {
        super(props)
        this.state = {
             itemSearch:[],
             inputValue:'',
             isLogOut:false
        }
    }
        componentDidMount(){
            console.log("dhanush")
            this.getData();
        }
        getData = async() => {
            const response = await Axios.get(
                `https://www.googleapis.com/youtube/v3/search`,
                {
                    params: {
                        part: "snippet",
                        maxResults: 2,
                        key: `AIzaSyAjBZmjz5g3mRbMZCGjkgcAuMhlT5iGz2M`,//AIzaSyD3scXpItuWsVCrmNEcMMCYojMjQVKH-cQ //AIzaSyDC4TilfbdUeiAaX8EbeQgDqwerWbnCQZs //AIzaSyAjBZmjz5g3mRbMZCGjkgcAuMhlT5iGz2M
                        q: this.state.inputValue,
                    },
                }
            );
                const data = response.data;
                console.log(data);
                this.setState({ data:data.items});
                console.log(this.state.data);
            this.setState({
                itemSearch:response.data.items.filter((item)=>item.id.hasOwnProperty('videoId')).map((item)=>[
                    item.id.videoId,
                    item.snippet.title,
                    item.snippet.channelTitle,
                    item.snippet.thumbnails.medium.url,
                ])
            })
        }
         
        inputChange = (e) =>{
            this.setState({inputValue:e.target.value},()=>console.log(this.state.inputValue))
        }
        logOut=()=>{
            alert("Do you want to logout")
            localStorage.clear();   
            this.props.history.push('/login')
        }

    render() {
        return (

            <div className="container-fluid p-0 ">
            <div className="top-nav">
                <nav className="navbar justify-content-between">
                        <img src="https://i.pinimg.com/originals/6c/de/6a/6cde6ad49f137539b1d05c6ac6ea16c4.png" className="text" alt="youtube" height={60} style={{position:'relative',left:'100px'}}/>
                    <form className="form-inline">
                    <Search inputChange={this.inputChange} getData={this.getData}/>
                        <i className="fas fa-th"></i>
                        <i className="far fa-grin-wink"></i>
                        <NavLink to='/login'><i className="fas fa-sign-in-alt" onClick={this.logOut} ></i></NavLink>
                    </form>
                </nav>
            </div>
            <div className="container-fluid inner-div ">
                <div className="side-nav">
                    <Side/>
                </div>
                <div className="main-div">
                    <MainDivision searchItem = {this.state.itemSearch} />
                </div>
            </div>
        </div>
        )
    }
}
export default withRouter(head);