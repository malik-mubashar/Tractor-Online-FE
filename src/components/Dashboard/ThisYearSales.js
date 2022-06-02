import React from 'react';
import Chart from 'react-apexcharts';

class ThisYearSales extends React.Component {
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
                    '01/03/2018', 
                    '02/03/2018', 
                    '03/03/2018', 
                    '04/03/2018', 
                    '05/03/2018', 
                    '06/03/2018', 
                    '07/03/2018', 
                    '08/03/2018', 
                    '09/03/2018', 
                    '10/03/2018', 
                    '11/03/2018',
                    '12/03/2018',
                ],
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
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
                name: 'Weekly Sales',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 40]
            }, {
                name: 'Monthly Sales',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 40]
            }, {
                name: 'Total Sales',
                type: 'line',
                data: [76, 66, 63, 94, 35, 55, 48, 62, 100, 49, 73, 80]
            }],
        }
    }

    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">This Year Sales Statistics</h5>
                    </div>
                    <div id="chart">
                        <Chart options={this.state.options} series={this.state.series} type="line" height="400" />
                    </div>
                </div>
            </div>
        );
    }
}

export default ThisYearSales;