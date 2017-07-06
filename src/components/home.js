import React from "react"; 
import { CSSTransitionGroup } from "react-transition-group"; 

const Home = () => {

	return (
		<div className="home-content">

		 <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

		   <div className="conference-detail">
		     <h1>A Conference By Dogs</h1>
		     <p>For Dog Owners & Lovers</p>
		   </div>

		   </CSSTransitionGroup>
		   		   
		</div>
		); 

}

export default Home; 
