import React from "react"; 
// import {Link} from 'react-router-dom'; 
import { NavLink } from "react-router-dom"; 



class NavBar extends React.Component{


	render(){

		const elementClickStyle = {
			color: "black", 
			background: "white"
		}; 

		return (
		    <ul className="navbar">               
	                <li className="home tab"><NavLink exact activeStyle={elementClickStyle} to="/">ABOUT</NavLink></li>
	                <li className="stuff tab"><NavLink activeStyle={elementClickStyle} to="/speakers/">SPEAKERS</NavLink></li>
	                <li className="contact tab"><NavLink activeStyle={elementClickStyle} to="/schedule/">SCHEDULE</NavLink></li>
	                <li className="contact tab"><NavLink activeStyle={elementClickStyle} to="/pricing">PRICING</NavLink></li>
	        </ul>
        )
    }

}

export default NavBar; 


