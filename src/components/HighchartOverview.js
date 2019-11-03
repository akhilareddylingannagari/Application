import React, { Component } from 'react';
import StockChart from './Stock';
import Highcharts from 'highcharts/highstock';
import { Link, withRouter } from 'react-router-dom';
const axios = require('axios');

// Load Highcharts modules
require('highcharts/indicators/indicators')(Highcharts);
require('highcharts/indicators/pivot-points')(Highcharts);
require('highcharts/indicators/macd')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/map')(Highcharts);

class Details extends Component {
  constructor(props) {
    super(props);
    this.heading =
      props.location && props.location.state && props.location.state.data
        ? props.location.state.data
        : null;
    this.label =
      props.location && props.location.state && props.location.state.label
        ? props.location.state.label
        : null;
    this.state = {
      stockOptions: {
        chart: {
          zoomType: 'x',
          events: {
            load: function() {
              // set up the updating of the chart each 3 minutes
              var series = this.series[0];
              setInterval(function() {
                var x = new Date().getTime(), // current time
                  y = Math.round(Math.random() * 100);
                series.addPoint([x, y], true, true);
              }, 10000);
            }
          }
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
            name: 'data',
            data:
              //  getData(700000)

              (function() {
                // generate an array of random data
                var data = [],
                  time = new Date().getTime(),
                  i;

                for (i = -999999; i <= 0; i += 1) {
                  data.push([
                    time + i * 10000,
                    Math.round(Math.random() * 100)
                  ]);
                }
                console.log('*******************************8888888', data);
                return data;
              })()
          }
        ]
      }
    };
  }

  // componentDidMount() {
  //     let apiCallForEnergyData = setInterval(
  //         async () => {
  //             try {
  //                 const responseData = await axios.get(
  //                     `https://g93jjv7s66.execute-api.eu-west-1.amazonaws.com/prod/?${"x"}` //API Call for every 3 minutes
  //                 );
  //                 this.setState((prevstate) => ({
  //                     stockOptions: { ...prevstate, series: responseData }
  //                 }))
  //             } catch (err) {
  //                 console.error(':error', err);
  //             }

  //         }
  //         , 60000 * 3)

  //     this.setState({ apiCallForEnergyData })
  // }

  componentWillUnmount() {
    //clear the interval the api call after unmounting the Component
    clearInterval(this.state.apiCallForEnergyData);
  }

  render() {
    const { stockOptions } = this.state;
    return (
      <div>
        {this.tset ? (
          <StockChart options={stockOptions} highcharts={Highcharts} />
        ) : (
          <div>Still Loading... </div>
        )}
      </div>
    );
  }
}

export default withRouter(Details);
