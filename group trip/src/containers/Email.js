import React, { Component } from 'react';

export default class Emails extends Component{
  render(){ 

	return(
			<div className="emailForm">
				<div className="form">
					<p className="firstName">First Name</p>
					<input id="emails" value = {this.props.name} className="nameInput" type="text" onChange={(e)=>this.props.changeName(e)}/>
				</div>
				<div className="form">
					<p className="Email">Email address</p>
					<input type="email" className="emailInput" value = {this.props.email} onChange={(e)=>this.props.changeEmail(e)}/>
					<a className="addBtn" onClick={()=>this.props.addPerson()}>add</a>
				</div>
			</div>

		)
	}

}