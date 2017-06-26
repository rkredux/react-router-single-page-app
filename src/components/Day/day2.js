import React from "react";
import ConferenceAgenda from "../ConferenceAgenda.js"; 
import Session from "../Session.js"; 



const Day2 = () => {
	return (

		  <div className="agenda-container">
		    {Object.keys(ConferenceAgenda.day2.agenda).map((key) => <Session time={ConferenceAgenda.day2.agenda[key].time} name={ConferenceAgenda.day2.agenda[key].name} speaker={ConferenceAgenda.day2.agenda[key].speaker[0]} index={key}/>)}
		  </div>
	
		); 
}

export default Day2; 
