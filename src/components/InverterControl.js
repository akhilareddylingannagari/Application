import React from 'react'
import {CustomInput} from 'reactstrap'
import PrototypeAPI from "../api/PrototypeAPI";

import './ConverterControl.css'


const DATA_UPDATE_RATE_MS = 500
class InverterControl extends React.Component{
	constructor(props){
		super(props)

		this.API = new PrototypeAPI()

		this.state = {
			inverterStatus: true,
			batteryVoltage: 0,
			batteryChgCurr: 0,
			batteryDisCurr: 0,
			outputCurr: 0,
			invConfig: 0
		}
	}


	// Called by React once when component initialized
	componentDidMount(){
		// Start data update timer
		this.updateTimer = setInterval(async () => {
			this.setState({
				/*batteryVoltage: (await this.API.inverterData()).batteryVoltage,
				batteryChgCurr: (await this.API.inverterData()).batteryChgCurr,
				batteryDisCurr: (await this.API.inverterData()).batteryDisCurr,
				outputCurr: (await this.API.inverterData()).outputCurr,
				invConfig: (await this.API.inverterData()).invConfig*/
                batteryVoltage: 100,
                batteryChgCurr: 0,
                batteryDisCurr: 0,
                outputCurr: 0,
                invConfig: 0
			})
		}, DATA_UPDATE_RATE_MS) // ensures that render does not have to wait for API every time
	}

	// Called by React when component will be 'deleted'
	componentWillUnmount(){
		// Stop update timer
		clearInterval(this.updateTimer)
	}
	switchInverter = async (enable) => {
		// call API to change switch using a post command
		await this.API.inverterSwitch(enable)
		// get the value of the switch after changing
		let status = await this.API.inverterStatus()
		// change visual state of component
		await this.setState({inverterStatus: status})
	}

	render(){
		return(
			<div className = "batteryControl">
				<h3> Inverter Data </h3>
				<p> Battery Voltage: {this.state.batteryVoltage} V </p>
				<p> Battery Charge Current: {this.state.batteryChgCurr} A </p>
				<p> Battery Discharge Current: {this.state.batteryDisCurr} A </p>
				<p> Output Current: {this.state.outputCurr} A </p>
				<p> Status: {this.state.invConfig} </p>
				<CustomInput 
					type = "switch"
					id = "inverterSwitch"
					name = "inverterSwitch"
					label = "NOT WORKING ATM: Source of AC output (Off: Batt first, On: UTI first)"
					checked = {this.state.inverterStatus}
					onChange = {async (event) => {await this.switchInverter(event.target.checked)}}
				/>
			</div>
		);
	}
}
export default InverterControl
