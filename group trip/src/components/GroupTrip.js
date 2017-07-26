import React, { Component } from 'react';
import Emails from '../containers/Email.js'
import axios from 'axios';

export default class GroupTrip extends React.Component {
	constructor(){
		super();
		this.state = {
			tripName: "",
			curName: "",
			curEmail: "",
			infos: [],
			curId: 0
		}

		this.nameChange = this.nameChange.bind(this)
		this.changeCurName = this.changeCurName.bind(this)
		this.changeCurEmail = this.changeCurEmail.bind(this)
		this.addPerson = this.addPerson.bind(this)
	}
	nameChange(e){
		var name = e.target.value.slice()
		var cr = this.state.tripName
		this.setState({
			tripName: name,
		})
	}

	changeCurName(e){
		var name = e.target.value
		this.setState({
			curName: name
		})
		console.log(name)
	}
	changeCurEmail(e){
		var email = e.target.value
		this.setState({
			curEmail: email
		})
		console.log(email)
	}
	addPerson(){
		const newId = this.state.curId;
		const name = this.state.curName;
		const email = this.state.curEmail;
		const arr = this.state.infos.slice()
		arr.push({
			id: newId, 
			name: name,
			email: email,
		});
		this.setState({
			curId: newId + 1,
			curName: "",
			curEmail: "",
			infos: arr,
		})
		console.log(arr)
	}

	render() {

		axios.get('http://127.0.0.1:5000/')
		  .then(function (response) {
		    console.log(response);
		    console.log("okokokokokkoko")
		})

		const arr = this.state.infos;
		var crList = arr.map((t) => (
			<List
				key={t.id}
				id={t.id}
				name={t.name}
				email={t.email}
			/>
		))
		return (
	 		<div className = "groupTrip">
		 		<header className="header">
		 			<div className="navBar">
		 				<img src={require('../img/logo.png')} className="logo"/>
		 			</div>
		 		</header>
		 		<h4 className="AB">If you’ve ever planned a group trip,
		 			 you know the pain of coordinating budgets, preferences, 
		 			 and timelines with your friends and family members. Instead of 
		 			 getting stressed out in email chains, 
		 			why not ask your friends to vote on options you set out for them?</h4>
		 		<div className="tripDetails">
			 		<div className="col-sm-2" />
		 			<div className="col-sm-6">
			 			<form id="id" action="" method="">
			 				<div className="form">
								<p className="formItems">Name your trip</p>
								<input type="text" className="tripTitle" onChange={(e) => this.nameChange(e)}/>
							</div>
							{crList}
							<div className="emailFields">
								<Emails key={1} name={this.state.curName} email={this.state.curEmail} addPerson={this.addPerson} changeName={this.changeCurName} changeEmail={this.changeCurEmail}/>
							</div>
							<input type="submit" value="Get started"  className="start" onClick={this.props.showPage}/>
						</form>
		 			</div>
		 		</div>
		 	</div>
		 )
	}
}

class List extends React.Component{
	render(){
		return(
			<div className="listOf">
				<div className="guestList">
					<p className="guest">Guest {this.props.id  + 1}</p>
					<div className="task">
						<p className="name">{this.props.name}</p>
						<p className="email">{this.props.email}</p>
					</div>
				</div>
			</div>
		);
	}
}

