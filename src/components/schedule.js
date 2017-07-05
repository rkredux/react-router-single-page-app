import React from "react"; 
import { Route, Link } from 'react-router-dom'; 
import ScheduleViewer from "./ScheduleViewer.js"; 
import Day1 from "./Day/day1.js"



const Schedule = () => {
	return (
		<div className="main-content">
          <div className="inner-wrapper schedule">

	            <ul className="agenda-nav">         
	                <li className="day one"><Link to="/schedule/day1">DAY ONE</Link></li>
	                <li className="day two"><Link to="/schedule/day2">DAY TWO</Link></li>
	                <li className="day three"><Link to="/schedule/day3">DAY THREE</Link></li>
	            </ul>

	            <Route exact path="/schedule" component={Day1}></Route>

	            <ScheduleViewer/>
		  </div>          
		</div>
		); 
}

export default Schedule; 
