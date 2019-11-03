import React from 'react';

import ConverterControl from '../components/ConverterControl';
import InverterControl from '../components/InverterControl';
import BatteryControl from '../components/BatteryControl';

import './Home.css';
class Home extends React.Component {
  render() {
    return (
      <div className='home' key='home'>
        <InverterControl />
        <BatteryControl />
      </div>
    );
  }
}

export default Home;
