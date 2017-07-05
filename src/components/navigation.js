import React from "react"; 
import NavBar from "./NavBar.js"; 
import { Link } from "react-router-dom"

class Navigation extends React.Component{

	render(){
		return (

		<nav className="flex-nav">

       <Link to="/"><div className="logo"><i className="fa fa-paw" aria-hidden="true"></i><span>DOGFRENCE</span></div></Link>

       <NavBar/>

    </nav>

         ); 
	}
}

export default Navigation; 
