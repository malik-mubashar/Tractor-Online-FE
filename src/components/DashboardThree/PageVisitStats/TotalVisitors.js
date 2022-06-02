import React from 'react';
import ReactEcharts from 'echarts-for-react';

class TotalVisitors extends React.Component {
    render() {
        return (
            <ReactEcharts 
                option={this.props.data} 
                style={{height: '100px', width: '100%'}} 
                notMerge={true} 
                lazyUpdate={true} 
                opts={{renderer: 'svg'}}
            />
        );
    }
}
 
TotalVisitors.defaultProps = {
    data: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        xAxis: {
            data: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                textStyle: {
                    color: '#7ed320'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        grid: [{
            top: '0',
            bottom: '20%',
            left: '0',
            right: '0',
        }],
        color: ['#7ed320'],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [50, 80, 110, 140, 110, 80, 50],
            z: 10
        }, {
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 0,
            symbolOffset: [0, '-100%'],
        }]
    }
};

export default TotalVisitors;