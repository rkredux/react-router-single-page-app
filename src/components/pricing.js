import React from "react"; 
import {CSSTransitionGroup} from "react-transition-group"; 


class Pricing extends React.Component {

render(){
	return (


      
	  <div className="main-content">
       

        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

       
           <div key="section" className="inner-wrapper pricing">


	        	<div key="section1" className="box box1">
	        		<h2 className="name">Silver</h2>
	        		<p className="feature">Keynote</p>
	        		<p className="feature">Coffee Break</p>
	        		<p className="feature">Certificate</p>
	        		<p className="price">USD 50</p>
	        		<button className="buy">Buy Ticket</button>
	        	</div>


	        	<div key="section2" className="box box2">	            
	        		<h2 className="name">Gold</h2>
	        		<p className="feature">Keynote</p>
	        		<p className="feature">Coffee Break</p>
	        		<p className="feature">Certificate</p>
	        		<p className="price">USD 100</p>
	        		<button className="buy">Buy Ticket</button>
	        	</div>


	        	<div key="section3" className="box box3">
	        		<h2 className="name">Platinum</h2>
	        		<p className="feature">Keynote + Workshop</p>
	        		<p className="feature">Coffee Break</p>
	        		<p className="feature">Certificate + Cocktail</p>
	        		<p className="price">USD 175</p>
	        		<button className="buy">Buy Ticket</button>
	        	</div>


            </div>

         </CSSTransitionGroup>   

       </div>  

   

	); 
}

}

export default Pricing; 
