import React from 'react';
import Chart from 'react-apexcharts'

class MonochromePieChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                theme: {
                    monochrome: {
                        enabled: true
                    }
                },
                title: {
                    text: "Number of leads"
                },
                responsive: [{
                    options: {
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series: [25, 15, 44, 55, 41, 17],
        }
    }

    render() {
        return (
            <div id="chart" className="apexcharts-content">
                <Chart options={this.state.options} series={this.state.series} type="pie" height={375} />
            </div>
        );
    }
}

export default MonochromePieChart;