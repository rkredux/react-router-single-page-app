import React from "react"; 
 

class Session extends React.Component {	
		
		render(){
			return (	
			      <ul className="session-container">
			      	<li className="session time">{this.props.time}</li>
			      	<li className="session name">{this.props.name}</li>
			      	<li className="session speaker-name">{this.props.speaker}</li>
			      </ul>

		    ); 
        }	

}



export default Session; 
