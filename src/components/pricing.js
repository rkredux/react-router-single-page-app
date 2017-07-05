import React from "react"; 

const Pricing = () => {
	return (
		<div className="main-content">
           <div className="inner-wrapper pricing">


	        	<div className="box box1">
	        		<h2 className="name">Silver</h2>
	        		<p className="feature">Keynote</p>
	        		<p className="feature">Coffee Break</p>
	        		<p className="feature">Certificate</p>
	        		<p className="price">USD 50</p>
	        		<button className="buy">Buy Ticket</button>
	        	</div>


	        	<div className="box box2">	            
	        		<h2 className="name">Gold</h2>
	        		<p className="feature">Keynote</p>
	        		<p className="feature">Coffee Break</p>
	        		<p className="feature">Certificate</p>
	        		<p className="price">USD 100</p>
	        		<button className="buy">Buy Ticket</button>
	        	</div>


	        	<div className="box box3">
	        		<h2 className="name">Platinum</h2>
	        		<p className="feature">Keynote + Workshop</p>
	        		<p className="feature">Coffee Break</p>
	        		<p className="feature">Certificate + Cocktail</p>
	        		<p className="price">USD 175</p>
	        		<button className="buy">Buy Ticket</button>
	        	</div>


            </div>

		</div>          

		); 
}

export default Pricing; 
