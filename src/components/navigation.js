import React from "react"; 
import {Link} from 'react-router-dom'; 


class Navigation extends React.Component{
	render(){
		return (

		<nav className="flex-nav">

       

           <div className="logo"><i className="fa fa-paw" aria-hidden="true"></i><span>DOGFRENCE</span></div>

    		   <ul className="navbar">
                
                <li className="home tab"><Link to="/">ABOUT</Link></li>
                <li className="stuff tab"><Link to="/stuff">SPEAKERS</Link></li>
                <li className="contact tab"><Link to="/contact">SCHEDULE</Link></li>
                <li className="contact tab"><Link to="/contact">PRICING</Link></li>
                <li className="contact tab"><Link to="/contact">VENUE</Link></li>

           </ul>




    </nav>

         ); 
	}
}

export default Navigation; 
