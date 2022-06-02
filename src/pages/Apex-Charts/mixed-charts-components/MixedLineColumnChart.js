import React from 'react';
import Chart from 'react-apexcharts'

class MixedLineColumnChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Traffic Sources',
                    offsetX: 60,
                },
                labels: ['01 Mar 2018', '02 Mar 2018', '03 Mar 2018', '04 Mar 2018', '05 Mar 2018', '06 Mar 2018', '07 Mar 2018', '08 Mar 2018', '09 Mar 2018', '10 Mar 2018', '11 Mar 2018', '12 Mar 2018', '13 Mar 2018', '14 Mar 2018', '15 Mar 2018'
                ],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },
                }, {
                opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }],
                legend: {
                    offsetY: -10,
                }
            },
            series: [{
                name: 'Website Blog',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 440, 505, 414]
            }, {
                name: 'Social Media',
                type: 'line',
                data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 23, 42, 35]
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

export default MixedLineColumnChart;