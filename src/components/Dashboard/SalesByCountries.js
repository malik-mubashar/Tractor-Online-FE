import React from 'react';
import ReactEcharts from 'echarts-for-react';

class SalesByCountries extends React.Component {
    render() {
        return (
            <div className="card mb-4 overflow-hidden">
                <div className="card-body">
                    <div className="card-header">
                        <h5 className="card-title">Sales by Countries</h5>
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

SalesByCountries.defaultProps = {
    data: {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: 'Country',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'Germany'},
                    {value:800, name:'USA'},
                    {value:234, name:'Italy'},
                    {value:135, name:'Spain'},
                    {value:1548, name:'UK'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
};

export default SalesByCountries;