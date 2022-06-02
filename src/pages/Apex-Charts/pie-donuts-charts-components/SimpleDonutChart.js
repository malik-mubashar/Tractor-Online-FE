import React from 'react';
import Chart from 'react-apexcharts'

class SimpleDonutChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                labels: ['UK', 'Canada', 'USA', 'Australia', 'Italy'],
                responsive: [{
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: [44, 55, 41, 17, 15]
        }
    }

    render() {
        return (
            <div id="chart" className="apexcharts-content">
                <Chart options={this.state.options} series={this.state.series} type="donut" height={350} />
            </div>
        );
    }
}

export default SimpleDonutChart;