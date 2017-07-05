import React from "react"; 
import {Switch, Route} from "react-router-dom"; 
import Home from "./home.js"; 
import Stuff from "./stuff.js"; 
import Contact from "./contact.js"; 
import Speakers from "./speaker.js"; 
import Schedule from "./schedule.js"; 
import Pricing from "./pricing.js"; 
import Venue from "./venue.js"; 







class Main extends React.Component{

	render(){
		return (
	    	
			<Switch>


				<Route exact path="/" component={Home}></Route>
				<Route path="/speakers" component={Speakers}></Route>
				<Route path="/schedule/" component={Schedule}></Route>
				<Route path="/pricing" component={Pricing}></Route>
				<Route path="/venue" component={Venue}></Route>

	

			</Switch>	
			
         ); 
	}
}

export default Main; 
