import React from "react";
import SampleSpeakers from "./SampleSpeakers.js"; 
import Image from "./image.js";


const Speakers = () => {

	return (
       
        <div className="main-content">
           <div className="inner-wrapper speaker">
			  		   
			    {Object.keys(SampleSpeakers).map((key) => <Image breed={SampleSpeakers[key].breed} name={SampleSpeakers[key].name} path={require(SampleSpeakers[key].image)} key={key} index={key}/>)}

	        </div>
	    </div>

		); 
}

export default Speakers; 
