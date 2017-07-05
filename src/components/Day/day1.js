import React from "react";
import ConferenceAgenda from "../ConferenceAgenda.js"; 
import Session from "../Session.js"; 



const Day1 = () => {
	return (

		  <div className="agenda-container">
		    {Object.keys(ConferenceAgenda.day1.agenda).map((key) => <Session key={key} time={ConferenceAgenda.day1.agenda[key].time} name={ConferenceAgenda.day1.agenda[key].name} speaker={ConferenceAgenda.day1.agenda[key].speaker[0]} index={key}/>)}
		  </div>
	
		); 
}

export default Day1; 
