import React, { Component } from 'react';

export default class Confirmation extends React.Component{
	render(){
		return(
			<div className="sended">
				<div className="navBar2">
	 				<img src={require('../img/logo.png')} className="logo" onClick={this.props.showPage} />
	 			</div>
	 			<div className="confirm">
	 				<img className="confirmPng" src={require('../img/success.png')} />
	 			</div>
	 			<p className="thanks-for-your-input">Survey sent to the group! You will 
	 				get an email when everyone answers.</p>
	 			<a className="startServey goToSurvey-btn" href="https://projects.invisionapp.com/share/3XCR3MK9A#/screens/245546666">Fill the survey</a>
			</div>
		)
	}
}