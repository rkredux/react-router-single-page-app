import React from "react"; 
import {Link} from 'react-router-dom'; 
import ScheduleViewer from "./ScheduleViewer.js"; 


const Schedule = () => {
	return (
		<div className="main-content">
          <div className="inner-wrapper schedule">

	            <ul className="agenda-nav">         
	                <li className="day one"><Link to="/schedule/">DAY ONE</Link></li>
	                <li className="day two"><Link to="/schedule/day2">DAY TWO</Link></li>
	                <li className="day three"><Link to="/schedule/day3">DAY THREE</Link></li>
	            </ul>

	            <ScheduleViewer/>
		  </div>          
		</div>
		); 
}

export default Schedule; 
