import React from 'react';
import Chart from 'react-apexcharts'

class TrendingProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: '',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            },
            series: [{
                name: "MacBook Pro",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 160, 150, 160]
            }],
        }
    }

    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Product Trends by Month</h5>
                    </div>
                    <div id="chart" className="apexcharts-content">
                        <Chart options={this.state.options} series={this.state.series} type="line" height={335} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TrendingProduct;