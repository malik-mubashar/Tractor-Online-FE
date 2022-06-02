import React from 'react';
import ReactEcharts from 'echarts-for-react';

class ThisMonthSales extends React.Component {
    render() {
        return (
            <div className="card mb-4">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Last 15 days Sales</h5>
                    </div>

                    <ReactEcharts 
                        option={this.props.data} 
                        style={{height: '350px'}} 
                        notMerge={true} 
                        lazyUpdate={true} 
                        opts={{renderer: 'svg'}}
                    />
                </div>
            </div>
        );
    }
}

ThisMonthSales.defaultProps = {
    data: {
        color: ['#2962ff'],
        tooltip: {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'       
            }
        },
        grid: {
            top: '5%',
            left: '5',
            right: '0',
            bottom: '1',
            containLabel: true
        },
        xAxis: [
            {
                type : 'category',
                data : ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 'Mar 15'],
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
                }
            }
        ],
        yAxis: [
            {
                type : 'value',
                axisLabel: {
                    formatter: '$ {value}'
                },
                axisLine: {
                    show: true,
                    onZero: false,
                    lineStyle: {
                        color: '#797979',
                        type: 'solid',
                    }
                }
            }
        ],
        series: [
            {
                name:'Month Total',
                type:'bar',
                barWidth: '50%',
                data:[10000, 5000, 7000, 3000, 6000, 8000, 12000, 9000, 2500, 4300, 6100, 7700, 6000, 8000, 12000],
                itemStyle: {
                    normal: {
                        color: '#2962ff',
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
};

export default ThisMonthSales;