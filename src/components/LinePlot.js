import React from 'react';
import { render } from 'react-dom';
// Import Highcharts
import StockChart from './Stock';

import moment from 'react-moment';
import 'moment-timezone';

// Import our demo components
import Chart from '../components/Chart.jsx';

// Load Highcharts modules
import Highcharts, { dateFormat } from 'highcharts/highstock';
import { Link, withRouter } from 'react-router-dom';
const axios = require('axios');

// Load Highcharts modules
require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/pivot-points')(Highcharts);
require('highcharts/indicators/macd')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/map')(Highcharts);

class TrialChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      seriesData: [],


    };
  }

  // componentDidMount() {
  //   let newData = [];
  //   let temp = [];
  //   fetch(
  //     'https://c7pduqwyg6.execute-api.eu-west-1.amazonaws.com/prod/'
  //   )
  //     .then(response => response.json())
  //     .then(res => {
  //       // console.log(res.Items , "::res")
  //       let data = res.Items;
  //       // console.log(data, "asdfds");

  //       this.setState({
  //         seriesData: data
  //       })

  //     });
  // }



  // componentDidMount() {
  // fetch('https://c7pduqwyg6.execute-api.eu-west-1.amazonaws.com/prod/')
  //   .then(response => response.json())
  //   .then(data => {
  //     let newData = [];
  //     console.log('Response data ', data);
  // for (let i = 0; i < data.length; i++) {
  //   //X-axis data push
  //   cat.push(data[i][0]);
  //   //Y-axis data push
  //   newData.push({
  //     y: data[i][1]
  //   });
  // }
  // options.series[0].data = newData;
  // this.setState({ data: newData });
  //   });
  // for (var i = 0; i >= data.Count; i++) {
  //   newData.push(data[i].DateTime, data[i].Grid_Power);
  // }
  // }

  render() {
    // const { stockOptions } = this.state;
    let stockOptions = getData(this.state.seriesData);
    return (
      <div style={{width:"100%"}}>
        <StockChart options={stockOptions} highcharts={Highcharts} />
      </div>
    );
  }
}

export default TrialChart;


const getData = (data) => {
  // console.log(data, "::state");

  let tempData = [];
  if (data.length > 0) {

    data.map((item, i) => {
      if (i < 10) {
        let a = item.DateTime;
        let b = item.Grid_Power;
        tempData.push([
          parseInt(a),
          parseInt(b)
        ]);
      }
    });
    console.log(tempData, "::data for chart");
  }

  let stockOptions = {
    chart: {
      zoomType: 'x',
         events: {
               load: function () {
              
                  // set up the updating of the chart each second
                  var series = this.series[0];
                  setInterval(function () {
                      var x = (new Date()).getTime(), // current time
                          y = Math.round(Math.random() * 100);
                      series.addPoint([x, y], true, true);
                  }, 10000);
              } 
          } 
    },
  
    time: {
      useUTC: false
    },
    //   navigator: {
    //     enabled: false
    // },
    rangeSelector: {
      buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        },
        {
          type: 'day',
          count: 1,
          text: '1d'
        }, {
          type: 'week',
          count: 1,
          text: 'week'
        }, {
          type: 'month',
          count: 1,
          text: '1m'
        }, {
          type: 'year',
          count: 1,
          text: '1y'
        },
      ],
      inputEnabled: false,
      selected: 0
    },
  
    title: {
      text: 'Solar Data'
    },
  
    exporting: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      events: {
        // afterSetExtremes: afterSetExtremes
      },
      dateTimeLabelFormats: {
            day: '%A , %d %b',
            week: '%b'

        }
    },
    labels: {
      rotation: 315,
    },
  
    series: [{
      name: 'Random data',
      data: (function() {
        // generate an array of random data
        var data = [],
          time = (new Date()).getTime(),
          i;
  
        for (i = -3222222; i <= 0; i += 1) {
          data.push([
            time + i * 10000,
            Math.round(Math.random() * 100)
          ]);
        }
        return data;
      }())
    }]
  }

  return stockOptions;
}