import React from "react";
import ConferenceAgenda from "../ConferenceAgenda.js"; 
import Session from "../Session.js"; 



const Day3 = () => {
	return (

		  <div className="agenda-container">
		    {Object.keys(ConferenceAgenda.day3.agenda).map((key) => <Session time={ConferenceAgenda.day3.agenda[key].time} name={ConferenceAgenda.day3.agenda[key].name} speaker="Robin Crusoe" key={key} index={key}/>)}
		  </div>
	
		); 
}

export default Day3; 
