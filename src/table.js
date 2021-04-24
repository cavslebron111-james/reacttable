import React, { Component } from 'react';
import ReactTable from 'react-table-6';
//import 'react-table-6/react-table-6.css';

const columns = [
  {
    Header: 'UserId',
    accessor: 'userId'
  },
  {
   Header: 'Id',
   accessor: 'id'
 },
 {
   Header: 'Title',
   accessor: 'title'
 },
 {
   Header: 'Content',
   accessor: 'body'
 }

];




export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }
  

  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url,{
      method:'GET'
    }).then(response => response.json())
    .then(posts => {
      this.setState({posts: posts})
    })
  }
  
  
  
  
  
  render() {
    
    return (
       <ReactTable columns={columns} data = {this.state.posts}/>
 
  
  

  
  
  
  
  
     
 
 

 





  
    );
  }
}

