import React from "react"; 
 

class Image extends React.Component {	
		
		render(){
			return (
			<div className="image-wrapper">
			      <img src={this.props.path}/>
			      <h2 className="dog-name">{this.props.name}</h2> 
			      <p className="dog-breed">{this.props.breed}</p>
			</div>
		    ); 
        }	

}



export default Image; 
