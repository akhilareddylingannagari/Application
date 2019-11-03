import React from 'react';
import HighchartsReact from 'highcharts-react-official';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={this.props.highcharts}
          constructorType={'chart'}
          options={this.props.options}
          ref={'wrappedChart'}
        />
      </div>
    );
  }
}

export default Chart;
