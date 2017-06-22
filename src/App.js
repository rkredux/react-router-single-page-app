import React from "react"; 
import './App.css';
import Navigation from "./components/navigation.js"; 
import Main from "./components/main.js"; 



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




