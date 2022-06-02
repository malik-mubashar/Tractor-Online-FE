import React from 'react'
import Chart from 'react-apexcharts'

class VisitorStats extends React.Component {
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
                    'Mar 01', 
                    'Mar 02', 
                    'Mar 03', 
                    'Mar 04', 
                    'Mar 05', 
                    'Mar 06', 
                    'Mar 07', 
                    'Mar 08', 
                    'Mar 09 ',
                    'Mar 10', 
                    'Mar 12',
                    'Mar 13',
                    'Mar 14',
                    'Mar 15',
                    'Mar 16',
                    'Mar 17',
                    'Mar 18',
                    'Mar 19',
                    'Mar 20',
                ],
                markers: {
                    size: 0
                },
                yaxis: [
                    {
                        title: {
                            text: '',
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: '',
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
                data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33, 44, 55, 31, 43, 26, 41, 31, 47]
            }, {
                name: 'Total Visitor',
                type: 'line',
                data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43, 55, 69, 45, 54, 37, 52, 44, 61]
            }],
        }
    }

    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">This month visitor stats</h5>
                    </div>
                    <div id="chart" className="apexcharts-content">
                        <Chart options={this.state.options} series={this.state.series} type="line" height={400} />
                    </div>
                </div>
            </div>
        );
    }
};

export default VisitorStats;