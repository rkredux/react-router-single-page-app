import React from "react"; 
import {Link} from 'react-router-dom'; 


class Navigation extends React.Component{
	render(){
		return (

		<nav className="flex-nav">
		  <ul className="navbar">
            <li className="home tab"><Link to="/">ABOUT</Link></li>
            <li className="stuff tab"><Link to="/stuff">PORTFOLIO</Link></li>
            <li className="contact tab"><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
         ); 
	}
}

export default Navigation; 
