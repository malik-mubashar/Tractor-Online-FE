import React from 'react';
import Chart from 'react-apexcharts'

class MixedLineColumnAreaChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    stacked: false,
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: 
                [
                    '01/01/2003', 
                    '02/01/2003', 
                    '03/01/2003', 
                    '04/01/2003', 
                    '05/01/2003', 
                    '06/01/2003', 
                    '07/01/2003', 
                    '08/01/2003', 
                    '09/01/2003', 
                    '10/01/2003', 
                    '11/01/2003'
                ],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    title: {
                        text: 'Points',
                    },
                    min: 0
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                },
                legend: {
                    offsetY: -10,
                }
            },
            series: [{
                name: 'Page Views',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
            }, {
                name: 'New Visitor',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
            }, {
                name: 'Total Visitor',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
            }],
        }
    }

    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" height="450" />
            </div>
        );
    }
}

export default MixedLineColumnAreaChart;