import React from 'react';
import Chart from 'react-apexcharts'

class MixedLineAreaChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'solid',
                    opacity: [0.35, 1],
                },
                labels: 
                [
                    'Dec 01', 
                    'Dec 02', 
                    'Dec 03', 
                    'Dec 04', 
                    'Dec 05', 
                    'Dec 06', 
                    'Dec 07', 
                    'Dec 08', 
                    'Dec 09 ',
                    'Dec 10', 
                    'Dec 12',
                    'Dec 13',
                    'Dec 14',
                    'Dec 15',
                ],
                markers: {
                    size: 0
                },
                yaxis: [
                    {
                        title: {
                            text: 'New Visitor',
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: 'Total Visitor',
                        },
                    },
                ],
                tooltip: {
                    shared: true,
                    intersect: false,
                },
                legend: {
                    offsetY: -10,
                }
            },
            series: [{
                name: 'New Visitor',
                type: 'area',
                data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 44, 55, 31,]
            }, {
                name: 'Total Visitor',
                type: 'line',
                data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 55, 69, 45]
            }],
        }
    }

    render() {
        return (
            <div id="chart" className="apexcharts-content">
                <Chart options={this.state.options} series={this.state.series} type="line" height={400} />
            </div>
        );
    }
}

export default MixedLineAreaChart;