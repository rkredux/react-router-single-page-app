import React from "react"; 
import { CSSTransitionGroup } from "react-transition-group"; 

 

class Session extends React.Component {	
		
		render(){



			return (	


		         <CSSTransitionGroup
		          transitionName="example"
		          transitionAppear={true}
		          transitionAppearTimeout={500}
		          transitionEnter={false}
		          transitionLeave={false}>	
				      <ul className="session-container">
				      	<li className="session time">{this.props.time}</li>
				      	<li className="session name">{this.props.name}</li>
				      	<li className="session speaker-name">{this.props.speaker}</li>
				      </ul>
				 </CSSTransitionGroup>

		    ); 
        }	

}



export default Session; 



