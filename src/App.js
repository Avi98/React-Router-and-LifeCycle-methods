import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state=({
      users:[]
    })
  }
  
componentDidMount(){
 var that=this;
  var url='https://jsonplaceholder.typicode.com/users';
fetch(url)
.then(function(response){
  if(response>=400){
    throw new Error("bad response");
  }
  return response.json();
})
.then(function(data){
that.setState({
  users:data
});
})
}
  render() {
        const {users}=this.state;
    return (
      <ul>
              {users.map((user)=>{
                return <li>{user.name}</li>
              })}
      </ul>
    );
  }
}

export default App;
