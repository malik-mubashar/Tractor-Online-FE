import React from 'react';
import Chart from 'react-apexcharts'

class SplineAreaChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00",
                        "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
                        "2018-09-19T06:30:00"
                    ],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
                legend: {
                    offsetY: -10,
                }
            },
            series: [{
                name: 'New Sales',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'Existing Sales',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
        }
    }

    render() {
        return (
            <div id="chart" className="apexcharts-content">
                <Chart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        );
    }
}

export default SplineAreaChart;