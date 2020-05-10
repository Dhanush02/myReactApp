import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './head.css'
import Side from '../side/side'
import Card from '../mainDiv/card'
import Axios from 'axios'
export default class head extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             itemSearch:[]
        }
    }
    componentDidMount(){
        console.log("dhanush")
        // this.getData();
    }
    getData = async() => {
        const response = await Axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
                params: {
                    part: "snippet",
                    maxResults: 3,
                    key: `AIzaSyD3scXpItuWsVCrmNEcMMCYojMjQVKH-cQ`,
                    q: this.state.name,
                },
            }
        );
        this.setState({
            itemSearch:response.data.items.filter((item)=>item.id.hasOwnProperty('videoId')).map((item)=>[
                item.id.videoId,
                item.snippet.title,
                item.snippet.channelTitle,
                item.snippet.thumbnails.medium.url,
            ])
        })
    }
    
    render() {
        return (
            <div className="container-fluid p-0">
            <div className="top-nav">
                <nav className="navbar justify-content-between">
                        <a href="#" className="navbar-brand"><img src="https://i.pinimg.com/originals/6c/de/6a/6cde6ad49f137539b1d05c6ac6ea16c4.png" className="text" alt="youtube" height={60} style={{position:'relative',left:'100px'}}/></a>
                    <form className="form-inline">
                        <Autocomplete
                            id="combo-box-demo"

                            getOptionLabel={(option) => option.title}
                            style={{ width: 280 ,border:'none',background:'grey',borderRadius:'10px'}}
                            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                        />
                        <i className="fas fa-th"></i>
                        <i className="far fa-grin-wink"></i>
                        <i className="fas fa-sign-in-alt"></i>
                    </form>
                </nav>
            </div>
            <div className="container-fluid inner-fluid ">
                <div className="side-nav">
                    <Side/>
                </div>
                <div className="main-div">
                    {/* <MainDiv/> */}
                    <Card searchItem = {this.state.itemSearch}/>
                </div>
            </div>
            </div>
        )
    }
}
