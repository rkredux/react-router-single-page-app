import React from "react";
import ConferenceAgenda from "../ConferenceAgenda.js"; 
import Session from "../Session.js"; 



const Day2 = () => {
	return (

		  <div className="agenda-container">
		    {Object.keys(ConferenceAgenda.day2.agenda).map((key) => <Session time={ConferenceAgenda.day2.agenda[key].time} name={ConferenceAgenda.day2.agenda[key].name} speaker="Mahi Mahi" key={key} index={key}/>)}
		  </div>
	
		); 
}

export default Day2; 
