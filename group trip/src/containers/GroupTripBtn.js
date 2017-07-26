import React, { Component } from 'react';

export default class GroupTripButton extends Component {
	render() {
		 return (
		 	<div className="groupTripBtn">
			 	<button className = "myBtn" onClick = {this.props.showPage}>
			 		Group trip
			 	</button>
		 	</div>
		 )
	}
}

