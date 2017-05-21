import React from "react"; 
import './App.css';
import Navigation from "./components/navigation.js"; 
import Main from "./components/main.js"; 



class App extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <h1 className="head">RESUME</h1>
        <Navigation/>
        <Main/>
      </div>
      ); 
  }
}


export default App; 




