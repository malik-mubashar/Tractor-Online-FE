import React from 'react'
import ReactEcharts from 'echarts-for-react';

class LastWeekSales extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Last Week Sales</h5>
                    </div>
                    <ReactEcharts 
                        option={this.props.data} 
                        style={{height: '407px'}} 
                        notMerge={true}
                        lazyUpdate={true}
                        opts={{renderer: 'svg'}}
                    />
                </div>
            </div>
        );
    }
}

LastWeekSales.defaultProps = {
    data: {
        color: '#2962ff',
        tooltip: {
            trigger: 'none',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            top: '5%',
            bottom: '20',
            left: '30',
            right: '0%',
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#797979',
                        type: 'solid',
                        width: '1',
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowBlur: 5,
                        shadowOffsetX: 3,
                        shadowOffsetY: 3,
                    }
                },
                axisPointer: {
                    label: {
                        formatter: function (params) {
                            return 'Sales' + params.value
                                + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                        }
                    }
                },
                data: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#797979',
                        type: 'solid',
                    }
                },
            },
        ],
        series: [
            {
                name:'2018',
                type:'line',
                smooth: true,
                data: [1000, 500, 1200, 700, 1500, 1000, 1200],
                itemStyle: {
                    normal: {
                        color: 'red',
                        lineStyle: {
                            color: '#2962ff',
                            type: 'solid',
                            shadowColor: 'rgba(0,0,0,0)',
                            shadowBlur: 5,
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                        },
                        areaStyle: {
                            color: '#2962ff',
                            type: 'default',
                        }
                    },
                },
            }
        ]
    }
}

export default LastWeekSales;