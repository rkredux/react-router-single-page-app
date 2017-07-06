import React from "react";
import SampleSpeakers from "./SampleSpeakers.js"; 
import Image from "./image.js";
import {CSSTransitionGroup} from "react-transition-group"; 



const Speakers = () => {

	return (
       


        <div className="main-content">

          <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

           <div className="inner-wrapper speaker">
			  		   
			    {Object.keys(SampleSpeakers).map((key) => <Image breed={SampleSpeakers[key].breed} name={SampleSpeakers[key].name} path={require(SampleSpeakers[key].image)} key={key} index={key}/>)}

	        </div>

	      </CSSTransitionGroup>  
	    </div>

		); 
}

export default Speakers; 
