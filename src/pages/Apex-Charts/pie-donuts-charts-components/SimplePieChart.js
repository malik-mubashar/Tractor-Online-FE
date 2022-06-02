import React from 'react';
import Chart from 'react-apexcharts'

class SimplePieChart extends React.Component {
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
                }],
                legend: {
                    horizontalAlign: 'right',
                }
            },
            series: [44, 55, 13, 43, 22],
        }
    }

    render() {
        return (
            <div id="chart" className="apexcharts-content">
                <Chart options={this.state.options} series={this.state.series} type="pie" height={350} />
            </div>
        );
    }
}

export default SimplePieChart;