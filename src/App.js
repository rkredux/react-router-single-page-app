import React from "react"; 
import './App.css';
import Navigation from "./components/navigation.js"; 
import Main from "./components/main.js"; 
import NavBar from "./components/NavBar.js"; 



class App extends React.Component{
  

  render(){
    return (
      <div className="wrapper">
        <Navigation/>   
        <Main/>
      </div>
      ); 
  }
}

 
export default App; 




