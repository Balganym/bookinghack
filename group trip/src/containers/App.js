import React, { Component } from 'react';
import '../styles/App.css';
import GroupTripButton from './GroupTripBtn.js'
import GroupTrip from '../components/GroupTrip.js'
import CreatingForm from './CreatingForm.js'
import Confirmation from './Confirmation.js'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			show: <GroupTripButton showPage={() => this.groupTripPage()}/>
		}
		this.groupTripPage = this.groupTripPage.bind(this) 
		this.createFormPage = this.createFormPage.bind(this) 

	}
	groupTripPage() {
		this.setState({
			show: <GroupTrip showPage={() => this.createFormPage()}/>
		})
	}
	createFormPage(){
		this.setState({
			show: <CreatingForm showPage={() => this.confirmationPage()}/>
		})
	}
	confirmationPage(){
		this.setState({
			show: <Confirmation showPage={() => this.homePage()}/>
		})
	}
	homePage(){
		this.setState({
			show: <GroupTripButton showPage={() => this.groupTripPage()} />
		})
	}
  render() {
    return (
		<div className="App">
			{this.state.show}
		</div>
    );
  }
}

