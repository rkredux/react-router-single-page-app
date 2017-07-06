import React from "react"; 
import { NavLink, Route } from 'react-router-dom'; 
import ScheduleViewer from "./ScheduleViewer.js"; 
import Day1 from "./Day/day1.js"; 
import {CSSTransitionGroup} from "react-transition-group"; 



const Schedule = () => {


    const elementClickStyle = {
			color: "white", 
			background: "#808080"
		}; 

	return (
		<div className="main-content">

         <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

          <div className="inner-wrapper schedule">

	            <div className="agenda-nav">         
	                <NavLink to="/schedule/day1" activeStyle={elementClickStyle}><div className="day one">DAY ONE</div></NavLink>
	                <NavLink to="/schedule/day2" activeStyle={elementClickStyle}><div className="day two">DAY TWO</div></NavLink>
	                <NavLink to="/schedule/day3" activeStyle={elementClickStyle}><div className="day three">DAY THREE</div></NavLink>
	            </div>

	            <Route exact path="/schedule" component={Day1}></Route>

	            <ScheduleViewer/>
		  </div> 

		 </CSSTransitionGroup>

		</div>
		); 
}

export default Schedule; 
