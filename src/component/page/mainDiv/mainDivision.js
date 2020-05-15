import React, { Component } from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Card from '../mainDiv/card'
import Notify from '../notify/notify'
import OnVideo from '../mainDiv/onVideo'

 class mainDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
       playVideo:'',
    }    
  }
  onPlaying = (item) =>{
    this.setState({
      playVideo:item[0]
    })
  }
  render() {
    const routes = [
      {
          path: "/home",
          exact:true,
          main: () =><Card items={this.props.searchItem} onPlaying={this.onPlaying}/>
      },
      {
          path: "/playlists",
          main: () => <div className='text-center' style={{padding:'50px'}}><h1 style={{position:'relative',top:'160px'}}>PLAYLISTS</h1>
                          <h2 style={{position:'relative',top:'180px',fontWeight:'400'}}>A playlist is a collection of videos. ... You can go to the Library tab to view all of your playlists. If a video or channel's audience is set as made for kids and you're on a watch or channel page, you won't be able to add it to a playlist. You can still add content from search results into playlists.
                          </h2>
                      </div>
      },
      {
        path: "/downloads",
        main: () => <div className='text-center' style={{padding:'50px'}}><h1 style={{position:'relative',top:'160px'}}>DOWNLOADS</h1>
                        <h2 style={{position:'relative',top:'180px',fontWeight:'400'}}>A playlist is a collection of videos. ... You can go to the Library tab to view all of your playlists. If a video or channel's audience is set as made for kids and you're on a watch or channel page, you won't be able to add it to a playlist. You can still add content from search results into playlists.
                        </h2>
                    </div>
      },
      {
        path: "/trending",
        main: () => <Card items={this.props.searchItem} onPlaying={this.onPlaying}/>
      },
      {
        path: "/notification",
        main: () => <Notify/>
     }
   ]
    
    return (
      <div>
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
         {/* <Route  path="/login" render={()=><Redirect exact to='/home'/>}/> */}
              <Route path={`/home/watch/${this.state.playVideo}`} render ={()=><OnVideo id={this.state.playVideo}/> }/> 
            {/* <Redirect to={`/watch/${this.state.playVideo}`}/> */}
        </Switch>
      </div>
    )
  }
}
export default withRouter(mainDiv)