import React from "react"; 

const Pricing = () => {
	return (
		<div className="main-content">
           <div className="inner-wrapper pricing">


	        	<div class="box box1">
	        		<h2 class="name">Silver</h2>
	        		<p class="feature">Keynote</p>
	        		<p class="feature">Coffee Break</p>
	        		<p class="feature">Certificate</p>
	        		<p class="price">USD 50</p>
	        		<button class="buy">Buy Ticket</button>
	        	</div>


	        	<div class="box box2">	            
	        		<h2 class="name">Gold</h2>
	        		<p class="feature">Keynote</p>
	        		<p class="feature">Coffee Break</p>
	        		<p class="feature">Certificate</p>
	        		<p class="price">USD 100</p>
	        		<button class="buy">Buy Ticket</button>
	        	</div>


	        	<div class="box box3">
	        		<h2 class="name">Platinum</h2>
	        		<p class="feature">Keynote + Workshop</p>
	        		<p class="feature">Coffee Break</p>
	        		<p class="feature">Certificate + Cocktail</p>
	        		<p class="price">USD 175</p>
	        		<button class="buy">Buy Ticket</button>
	        	</div>


            </div>

		</div>          

		); 
}

export default Pricing; 
