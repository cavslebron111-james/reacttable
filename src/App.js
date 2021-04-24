import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table-6';
//import "react-table/react-table.css";  


  
  
class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  


  
   // const url = 'https://jsonplaceholder.typicode.com/posts';
    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())
      .then(posts => this.setState({posts: posts}))
       }
      
    
  
      render() {
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
        
    return (
      <div
        className="container"
        style={{
        height: '800px',
        width: '1800px' }}
      >
        <ReactTable
         
          data={this.state.posts}
          columns={columns}>
        </ReactTable>
      </div>
    );
  }
}

export default App;