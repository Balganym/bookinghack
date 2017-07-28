import React, { Component } from 'react';

export default class CreatingForm extends React.Component{
	constructor(props){
		super(props)
		this.state={
			cityId: 0,
			disabled: "disabled",
			dateId: 0,
			curCity: "",
			curStartDate: "",
			curEndDate: "",
			destination: false,
			cities: [],
			date: false,
			dates: [],
			budget: false,
			accomodationType: false,
			amenities: false
		}
		this.destinationSelect = this.destinationSelect.bind(this)
		this.dateSelection = this.dateSelection.bind(this)
		this.budgetSelection = this.budgetSelection.bind(this)
		this.accomodationSelection = this.accomodationSelection.bind(this)
		this.amenitiesSelection = this.amenitiesSelection.bind(this)
	}
	destinationSelect(){
		var cur = this.state.destination
		var disabled = ""
		if(cur){
			disabled: ""
		} else {
			disabled: "disabled"
		}
		this.setState({
			destination: !cur,

		})
		console.log(!cur)
	}
	dateSelection(){
		var cur = this.state.date
		this.setState({
			date: !cur,
		})
		console.log(!cur)
	}
	budgetSelection(){
		var cur = this.state.budget
		this.setState({
			budget: !cur,
		})
		console.log(!cur)
	}
	accomodationSelection(){
		var cur = this.state.accomodationType
		this.setState({
			accomodationType: !cur,
		})
		console.log(!cur)
	}
	amenitiesSelection(){
		var cur = this.state.amenities
		this.setState({
			amenities: !cur,
		})
		console.log(!cur)
	}

	changeCity(e){
		var city = e.target.value
		this.setState({
			curCity: city,
		})
	}
	changeStDate(e){

		var date = e.target.value
		this.setState({
			curStartDate: date,
		})
	}
	changeEDate(e){
		var date = e.target.value
		this.setState({
			curEndDate: date,
		})
	}
	addCity(){
		var city = this.state.curCity
		var arr = this.state.cities.slice()
		var newId = this.state.cityId
		if(this.state.destination){
			arr.push({
				id: newId, 
				cityName: city,
			})
		}
		this.setState({
			cities: arr,
			cityId: newId + 1,
			curCity: ""
		})
	}
	addDate(){
		var stDate = this.state.curStartDate
		var eDate = this.state.curEndDate
		var arr = this.state.dates.slice()
		var newId = this.state.dateId
		if(this.state.date){
			arr.push({
				id: newId, 
				start: stDate,
				end: eDate,
			})
		}
		this.setState({
			dates: arr,
			dateId: newId + 1,
		})
		console.log(stDate)
	}
	render(){
		const arr = this.state.cities;
		var cityList = arr.map((t) => (
			<CityList
				key={t.id}
				id={t.id}
				cityName={t.cityName}
			/>
		))
		const dates = this.state.dates;
		var dateList = dates.map((t) => (
			<DateList
				key={t.id}
				id={t.id}
				start={t.start}
				end={t.end}
			/>
		))

		return(
			<div className="sended">
				<script src="path/to/jquery.easy-autocomplete.min.js"></script> 
				<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
				<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
				
				<div className="navBar2">
	 				<img src={require('../img/logo.png')} className="logo"/>
	 			</div>
		 		<div className="contentForm">
		 			<p className="whatShouldGroup">What should the group decide on?</p>
		 			<form onsubmit="CheckFields()">
		 				<input type="hidden" name="project_name" value="booking" />
			          	<input type="hidden" name = "admin_email" value="balganymka@gmail.com" />	
						<input type="hidden" name = "form_subject" value="link" />

						<div className="destination expanded">
							<div className="ui checkbox">
							  <input type="checkbox" name="destination" onClick={()=>this.destinationSelect()} />
							  <label className="label">Destination</label>
							</div>
						</div>
						<div className="newDestin">
							{cityList}
							<div className="ui" disabled={this.state.disabled}>
			  					<input className="city" placeholder="City" type="text" autoComplete="on" value = {this.state.curCity} onChange={(e)=>this.changeCity(e)} />
								<a className="addCity" onClick={(e)=>this.addCity(e)}>add</a>
							</div>
						</div>
						<div className="dates">
							<div className="ui checkbox">
							  <input type="checkbox" name="example" onClick={()=>this.dateSelection()} />
							  <label className="label">Dates</label>
							</div>
							{dateList}
							<div className="dateSection">
								<div className="startEnd">
									<p className="dateItems">Start date</p>
									<input type="date" className="date" onChange={(e)=>this.changeStDate(e)}/>
								</div>
								<div className="startEnd">
									<p className="dateItems">End date</p>
									<input type="date" className="date" onChange={(e)=>this.changeEDate(e)}/>
									<a className="addDate" onClick={(e)=>this.addDate(e)}>add</a>
								</div>
								
							</div>

						</div>
						<div className="ui checkbox" onClick={()=>this.budgetSelection()} >
						  <input type="checkbox" name="example" />
						  <label className="label">Budget</label>
						</div>

						<div className="ui checkbox">
						  <input type="checkbox" name="example" onClick={()=>this.accomodationSelection()} />
						  <label className="label">Accommodation Type</label>
						</div>

						<div className="ui checkbox">
						  <input type="checkbox" name="example" onClick={()=>this.amenitiesSelection()}  />
						  <label className="label">Amenities</label>
						</div>
						<input type="submit" value="Send" className="startServey" onClick={this.props.showPage}/>
					</form>
		 		</div>
		 		<script src="../script.js"></script>
			</div>
		)
	}
}

class CityList extends React.Component{
	render(){
		return(
			<div className="listOf">
				<div className="guestList">
					<p className="guest">City {this.props.id  + 1}</p>
					<div className="task">
						<p className="name">{this.props.cityName}</p>
					</div>
				</div>
			</div>
		);
	}
}

class DateList extends React.Component{
	render(){
		return(
			<div className="listOf">
				<div className="guestList">

					<p className="fromTo">Date {this.props.id + 1}: from <span className="span">{this.props.start}</span> to <span className="span">{this.props.end}</span></p>

				</div>
			</div>
		);
	}
}


