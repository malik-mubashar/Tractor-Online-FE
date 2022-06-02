import React from 'react';
import Chart from 'react-apexcharts'

class GroupedBarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -10,
                    offsetY: -3,
                    style: {
                        fontSize: '10px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                xaxis: {
                    categories: [2013, 2014, 2015, 2016, 2017, 2018, 2019],
                },
                legend: {
                    offsetY: -10,
                }
            },
            series: [{
                data: [44, 55, 41, 64, 22, 43, 21]
            }, {
                data: [53, 32, 33, 52, 13, 44, 32]
            }],
        }
    }

    render() {
        return (
            <div id="chart" className="apexcharts-content">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default GroupedBarChart;