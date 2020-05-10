import React, { Component } from 'react'
import './div.css'
import CardUpdate from './cardUpdate'
export default class card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        // const data = [
            
        //     {
        //         // ?wmode=transparent&autoplay=1
        //         src:'https://www.youtube.com/embed/88iypMO9H7g?start=10&end=200',
        //         title:'Trending video 1',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/ZUcvKWegSGw?start=399',
        //         title:'Trending video 2',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/qit7je8Xb-Y',
        //         title:'Trending video 3',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/nAP7esBta10',
        //         title:'Trending video 4',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/-hsdXiwA4c0',
        //         title:'Trending video 5',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/IWOPRFRNj3g',
        //         title:'Trending video 6',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/P-jKtzUuVcM',
        //         title:'Trending video 7',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/BCsbNiz4Ep8',
        //         title:'Trending video 8',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/O8Bg4gAbRLk',
        //         title:'Trending video 9',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },{
        //         src:'https://www.youtube.com/embed/NGkEwWewgmY',
        //         title:'Trending video 10',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },
        //     {
        //         src:'https://www.youtube.com/embed/9wgN522wQRI',
        //         title:'Trending video 11',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     },{
        //         src:'https://www.youtube.com/embed/8gds2_1I6Fk',
        //         title:'Trending video 12',
        //         paraText:'Some quick example text to build on the card title and make up the bulk of the cards content.'
        //     }
        // ]
        // const card = data.map((e)=> <CardUpdate data ={e}/>)
        return (
            <div class="container">
  <div class="row">
    <div class="card-deck">
            {this.props.searchItem.map((item,index)=>{
                // console.log(item);
                return <CardUpdate items = {item} key ={index}/>
            })}
      </div>
      
      </div>
      
      </div>
            
        
        )
    }
}
