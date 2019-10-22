import React from 'react';
import './EnergyFlow.css';

const DATA_UPDATE_RATE_MS = 1000000;
const axios = require('axios');
class EnergyFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Battery_Power: 234,
      BatteryIpv: 4,
      BatteryVpv: 43,
      BMS_Charge: 234,
      BMS_Discharge: 245,
      DateTime: 1568937600021,
      Grid_Power: 1190,
      GridIpv: 5,
      GridVpv: 238,
      Inverter_Temperature: 23.5,
      InverterID: 'INV0000123456',
      Load_Power: 435,
      Pmeter: 2,
      SOC: 89,
      Solar_Power: 142.8,
      SolarIpv1: 0.6,
      SolarIpv2: 0,
      SolarVpv1: 238,
      Status: 'Normal',
      SolarVpv2: 0
    };
  }

  // Called by React once when component initialized
  componentDidMount() {
    this.updateTimer = setInterval(async () => {
      async function callInverterDataWriteApi(x) {
        try {
          await axios.get(
            `https://g93jjv7s66.execute-api.eu-west-1.amazonaws.com/prod/?${x}`
          );
        } catch (err) {
          console.error('GG', err);
        }
      }
      this.setState({
        // batteryVoltage: result.Items[0].btime
        Battery_Power: Math.round(235 + Math.random() * (230 - 240)),
        BatteryIpv: Math.round(13 + Math.random() * (5 - 15)),
        BatteryVpv: Math.round(40 + Math.random() * (30 - 45)),
        BMS_Charge: Math.round(230 + Math.random() * (225 - 250)),
        BMS_Discharge: Math.round(250 + Math.random() * (200 - 280)),
        DateTime: Date.now(),
        Grid_Power: Math.round(1500 + Math.random() * (1100 - 1900)),
        GridIpv: Math.round(220 + Math.random() * (202 - 243)),
        GridVpv: Math.round(250 + Math.random() * (200 - 295)),
        Inverter_Temperature: Math.round(15 + Math.random() * (10 - 30)),
        InverterID: 'INV0000123456',
        Load_Power: Math.round(360 + Math.random() * (350 - 400)),
        Pmeter: Math.round(35 + Math.random() * (25 - 50)),
        SOC: Math.round(55 + Math.random() * (35 - 90)),
        Solar_Power: Math.round(130 + Math.random() * (94 - 180)),
        SolarIpv1: Math.round(50 + Math.random() * (25 - 80)),
        SolarIpv2: Math.round(50 + Math.random() * (20 - 90)),
        SolarVpv1: Math.round(20 + Math.random() * (12 - 27)),
        Status: 'Normal',
        SolarVpv2: Math.round(23 + Math.random() * (10 - 25))
      });
      console.log('This is Battery' + this.state.Battery_Power);
      console.log('This is InverterID' + this.state.InverterID);
      console.log('This is DateTime' + this.state.DateTime);
      console.log('This is BatteryIpv' + this.state.BatteryIpv);
      console.log('This is BatteryVpv' + this.state.BatteryVpv);
      console.log('This is BMS_Charge' + this.state.BMS_Charge);
      console.log('This is BMS_Discharge' + this.state.BMS_Discharge);
      console.log('This is Grid_Power' + this.state.Grid_Power);
      console.log('This is GridIpv' + this.state.GridIpv);
      console.log('This is GridVpv' + this.state.GridVpv);
      console.log(
        'This is Inverter_Temperature' + this.state.Inverter_Temperature
      );
      console.log('This is Load_Power' + this.state.Load_Power);
      console.log('This is Pmeter' + this.state.Pmeter);
      console.log('This is SOC' + this.state.SOC);
      console.log('This is Solar_Power' + this.state.Solar_Power);
      console.log('This is SolarIpv1' + this.state.SolarIpv1);
      console.log('This is SolarIpv2' + this.state.SolarIpv2);
      console.log('This is SolarVpv1' + this.state.SolarVpv1);
      console.log('This is Status' + this.state.Status);
      console.log('This is SolarVpv2' + this.state.SolarVpv2);
      //var inverterData = `Battery_Power=${this.state.Battery_Power}&InverterID=${this.state.InverterID}&DateTime=${this.state.DateTime}`;
      var inverterData = `Battery_Power=${this.state.Battery_Power}&BatteryIpv=${this.state.BatteryIpv}&BatteryVpv=${this.state.BatteryVpv}&BMS_Charge=${this.state.BMS_Charge}&BMS_Discharge=${this.state.BMS_Discharge}&DateTime=${this.state.DateTime}&Grid_Power=${this.state.Grid_Power}&GridIpv=${this.state.GridIpv}&GridVpv=${this.state.GridVpv}&SOC=${this.state.SOC}&Inverter_Temperature=${this.state.Inverter_Temperature}&InverterID=${this.state.InverterID}&Load_Power=${this.state.Load_Power}&Pmeter=${this.state.Pmeter}&Solar_Power=${this.state.Solar_Power}&SolarIpv1=${this.state.SolarIpv1}&SolarIpv2=${this.state.SolarIpv2}&SolarVpv1=${this.state.SolarVpv1}&SolarVpv2=${this.state.SolarVpv2}&Status=${this.state.Status}`;

      callInverterDataWriteApi(inverterData);
    }, DATA_UPDATE_RATE_MS); // ensures that render does not have to wait for API every time
  }

  // Called by React when component will be 'deleted'
  componentWillUnmount() {
    // Stop update timer
    clearInterval(this.updateTimer);
  }
  render() {
    return (
      <ul class='circle-container'>
        <li>
          <img src={require('../assets/images/solar-house.png')} />
        </li>
        <li>
          <img src={require('../assets/images/battery4.png')} />
        </li>
        <li>
          <img src={require('../assets/images/tower.png')} />
        </li>
        <li>
          <img src={require('../assets/images/solar-panel.png')} />
        </li>
        <li>
          <img src={require('../assets/images/LPicon2.png')} />
        </li>
        <li class='circle-container-animation'>
          <img src={require('../assets/images/pack.gif')} />
          <img src={require('../assets/images/pack.gif')} />
          <img src={require('../assets/images/pack.gif')} />
          <img src={require('../assets/images/pack.gif')} />
        </li>
        <li class='circle-container-lbl'>
          <label> {this.state.Load_Power}</label>
          <label> {this.state.Grid_Power}</label>
          <label> {this.state.Battery_Power}</label>
          <label> {this.state.Solar_Power}</label>
        </li>
      </ul>
    );
  }
}
export default EnergyFlow;
