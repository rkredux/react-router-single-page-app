import React from "react"; 
import {Switch, Route} from "react-router-dom"; 
import Day1 from "./Day/day1.js"; 
import Day2 from "./Day/day2.js"; 
import Day3 from "./Day/day3.js"; 




class ScheduleViewer extends React.Component{

	render(){
		return (
		<Switch>
			<Route exact path="/schedule/day1" component={Day1}></Route>
			<Route exact path="/schedule/day2" component={Day2}></Route>
			<Route exact path="/schedule/day3" component={Day3}></Route>
		</Switch>	
			
         ); 
	}
}

export default ScheduleViewer; 
