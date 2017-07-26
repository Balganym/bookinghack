import React, { Component } from 'react';

export default class Events extends Component{
	render() {
		return(
			<div className="section1">
				<p className="what-s-the-group-boo">
					What’s the group booking for?
				</p>
				<div className="tripGoal">	
					<div className="checkForm">
						<input type="radio" className="checks" name="Bachelor/ette party" value="Bike" />
						<p className="booItems">Bachelor/ette party</p>
					</div>
					<div className="checkForm">
						<input type="radio" className="checks" name="Anniversary" />
						<p className="booItems">Anniversary</p>
					</div>
					<div className="checkForm">
						<input type="radio" className="checks" name="Wedding" /> 
						<p className="booItems">Wedding</p>
					</div>
					<div className="checkForm">
						<input type="radio" className="checks" name="Conference/Business" />
						<p className="booItems">Conference/Business</p>
					</div>
					<div className="checkForm">
						<input type="radio" className="checks" name="Birthday" />
						<p className="booItems">Birthday</p>
					</div>
					<div className="checkForm">
						<input type="radio" className="checks" name="Other" />  
						<p className="booItems">Other</p>
					</div>
				</div>
			</div>
		)
	}
}