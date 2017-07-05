import React from "react"; 
import {Link} from 'react-router-dom'; 



class NavBar extends React.Component{

	render(){

		return (
		    <ul className="navbar">               
	                <li className="home tab"><Link to="/">ABOUT</Link></li>
	                <li className="stuff tab"><Link to="/speakers/">SPEAKERS</Link></li>
	                <li className="contact tab"><Link to="/schedule/">SCHEDULE</Link></li>
	                <li className="contact tab"><Link to="/pricing">PRICING</Link></li>
	                <li className="contact tab"><Link to="/venue">VENUE</Link></li>
	        </ul>
	    ); 

    }
}


export default NavBar; 


