/* Imports */
import React from 'react';
import './Consumption.css';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

class Consumption extends React.Component {
  componentDidMount() {
    let chart = am4core.create('chartdiv', am4charts.RadarChart);
    //Data fields
    chart.data = [
      {
        category: 'CO2',
        value: 80, //lambda API instead of number
        full: 100
      },
      {
        category: 'Consumption',
        value: 50, //lambda API instead of number
        full: 100
      },
      {
        category: 'Reduce',
        value: 30, //lambda API instead of number
        full: 100
      }
    ];
    //chart.radius = am4core.percent(100);
    chart.innerRadius = am4core.percent(50);

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.tooltip.disabled = true;

    //categoryAxis.renderer.minHeight = 110;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.disabled = true;
    let labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.location = 1.8;
    labelTemplate.relativeRotation = 30;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.tooltip.disabled = true;
    valueAxis.min = 0;
    valueAxis.max = 100;
    //valueAxis.renderer.grid.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    //valueAxis.renderer.grid.template.fillOpacity = 0.03;

    // Create series for gray background
    var series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueY = 'full';
    series1.clustered = false;
    series1.dataFields.categoryX = 'category';
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor(
      'alternativeBackground'
    );
    series1.columns.template.fillOpacity = 0.08;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 0;

    //Create series for data values
    var series = chart.series.push(new am4charts.RadarColumnSeries());
    series.clustered = false;
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.columns.template.strokeWidth = 0;
    series.tooltipText = '{valueY}';
    series.columns.template.radarColumn.cornerRadius = 0;
    series.columns.template.radarColumn.innerCornerRadius = 0;

    //series.tooltip.pointerOrientation = "vertical";

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.radarColumn.states.create('hover');
    hoverState.properties.cornerRadius = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add('fill', function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    let bullet = series.bullets.create();
    bullet.fill = am4core.color('#ffffff');
    bullet.strokeOpacity = 0;

    let bulletValueLabel = bullet.createChild(am4core.Label);
    bulletValueLabel.text = "{valueY.total.formatNumber('$#.0')}";

    let label = bullet.createChild(am4core.Label);
    label.text = '{valueY}%' + '\n' + '{categoryX}';
    label.verticalCenter = 'middle';
    label.paddingLeft = -40;
    // label.fill = am4core.color('#ffffff');

    // Cursor
    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.lineY.disabled = true;
    chart.cursor.lineX.disabled = true;

    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  render() {
    return <div id='chartdiv'></div>;
  }
}
export default Consumption;
