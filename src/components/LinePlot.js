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
      stockOptions: {
        chart: {
          zoomType: 'x'
          //   events: {
          //     load: function() {
          //       // set up the updating of the chart each 3 minutes
          //       var series = this.series[0];
          //       setInterval(function() {
          //         var x = new Date().getTime(), // current time
          //           y = Math.round(Math.random() * 100);
          //         series.addPoint([x, y], true, true);
          //       }, 10000);
          //     }
          //   }
        },

        time: {
          useUTC: false
        },

        rangeSelector: {
          allButtonsEnabled: true,
          buttons: [
            {
              count: 10,
              type: 'minute',
              text: 'Today'
            },
            {
              type: 'week',
              count: 1,
              text: 'Week'
            },
            {
              type: 'month',
              count: 1,
              text: 'Month'
            },
            {
              type: 'year',
              count: 12,
              text: 'Year'
            }
          ],
          inputEnabled: true,
          selected: 0
        },

        title: {
          text: this.heading
        },

        exporting: {
          enabled: false
        },
        yAxis: {
          opposite: false
        },
        navigator: {
          enabled: false
        },

        series: [
          {
            name: 'newData',
            data:
              //  getData(700000)

              (function() {
                // generate an array of random data
                var newData = [];
                fetch(
                  'https://c7pduqwyg6.execute-api.eu-west-1.amazonaws.com/prod/'
                )
                  .then(response => response.json())
                  .then(res => {
                    var data = [];
                    data = res.Items;
                    console.log('===data', data);
                    for (var i = 0; i < data.length; i++) {
                      newData.push([
                        parseInt(data[i].DateTime),
                        parseInt(data[i].Grid_Power)
                      ]);
                    }
                    console.log('================', newData);
                  });
                return newData;
              })()
          }
        ]
      }
    };
  }

  componentDidMount() {
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
  }

  render() {
    const { stockOptions } = this.state;
    return (
      <div>
        <StockChart options={stockOptions} highcharts={Highcharts} />
      </div>
    );
  }
}

export default TrialChart;
