import React, { Component } from 'react'
import Newsitem from '../Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class  extends Component {
 static defaultProps={
     country:'in',
     pageSize:10,
     category:'general',
 }
 static propTypes={
     country:PropTypes.string,
     pageSize:PropTypes.number,
     category:PropTypes.string,
 }
  constructor(){
    super();
    console.log("hello i am constructor");
    this.state={
      page:1,
      articles:[],
      loading:true
      
      
      
    }
    }
    async componentDidMount()
    {
        console.log("cdm");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=706538c2a39445bf865fa494fad08cac&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles: parsedData.articles,loading:false});
    }
    handlePrevClick=async()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=706538c2a39445bf865fa494fad08cac&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
         this.setState({
            page:this.state.page-1,
            articles: parsedData.articles,
            loading: false
         })
    }
    handleNextClick= async()=>{
        console.log("next");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=706538c2a39445bf865fa494fad08cac&page=${this.state.page+1}&pageSize=${this.props.pageSize }`;
        this.setState({loading: true});
        let data=await fetch(url);
        let parsedData=await data.json();
         this.setState({
            page:this.state.page+1,
            articles: parsedData.articles,
            loading: false
         })
    }
  
  render() {
    console.log('render')
    return (
      <div className='container my-3'>
        <h2 className='text-center'style={{margin:'35px 0px'}}>MyNews-Top headlines</h2>
        {this.state.loading && <Spinner/>} 
        <div className="row">
        {this.state.articles && this.state.articles.map((element)=>{
          return <div className='col-md-4'key={element.url}>
          <Newsitem title={(element.title)?element.title.slice(0,45):""} description={(element.description)? element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
          </div>
        })}
 
       
         </div>
         <div className='container d-flex justify-content-between'>
         <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; pervious</button>
         <button  type="button" class="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
         </div>
      </div>
    )

  }

}

