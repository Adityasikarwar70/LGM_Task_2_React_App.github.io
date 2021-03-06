import React, { Component } from 'react'
import Users from "../src/InfoCard";
import './App.css';
import Logo from "./Images/LOGO.png";

	
class App extends Component {
  constructor(props){
	super(props)
		
	this.state = {info_data :[],
                waiting : true                
  }
  

	this.infoState = this.infoState.bind(this)
  }
    
  infoState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({info_data :users.data,
                        waiting: false
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){
    return (
    <React.Fragment>
      <div className="bg_color">
        <header>
          <div className="logo"><img src={Logo} alt="logoimg" /></div>
          <div className="btn"><button onClick={this.infoState} type="submit"> Get User </button></div>
        </header>

        <div className="userbox">
          <Users waiting={this.state.waiting} users={this.state.info_data}/>
        </div>
      </div>


      {/* <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">Info.io</a>
          <div className="d-flex">
            <button  onClick={this.infoState} className="btn" type="submit">Get User</button>
          </div>
         </div>
      </nav> */}
       
  
    </React.Fragment>
    )
  }
}
	
export default App;