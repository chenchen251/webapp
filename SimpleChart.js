import React from 'react';
import ReactEcharts from './echarts-for-react';

const SimpleChartComponent = React.createClass({
    propTypes: {
    },
    getOtion: function() {
        const option = {
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['14','15','16','17','18']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            color:[           
            	'lightblue',
            ],
            series : [
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[3, 4, 5, 6, 4]
                }
            ]
        };
        return option;
    },
    render: function() {
        
        return (
            <div className='examples'>
                <div className='parent'>                
                    <ReactEcharts
                        option={this.getOtion()} 
                        style={{height: '150px', width: '100%'}} 
                        className='react_for_echarts' />
               </div>
            </div>
        );
    }
});

export default SimpleChartComponent;