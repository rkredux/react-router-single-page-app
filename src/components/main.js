import React from "react"; 
import {Switch, Route} from "react-router-dom"; 
import Home from "./home.js"; 
import Stuff from "./stuff.js"; 
import Contact from "./contact.js"; 



class Main extends React.Component{
	
	render(){
		return (
		<Switch>
			<Route exact path="/" component={Home}></Route>
			<Route path="/stuff" component={Stuff}></Route>
			<Route path="/contact" component={Contact}></Route>
		</Switch>	
			
         ); 
	}
}

export default Main; 
