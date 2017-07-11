import React from 'react';
import ReactEcharts from './echarts-for-react';

const Hours = React.createClass({
    propTypes: {
    },
    getOtion: function() {
        const option = {

    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },
 
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['14','15','16','17','18']
    },
    yAxis: {
        type: 'value',
        nameGap:'20',
        
    },
    series: [
       
        {
            
            type:'line',
            stack: '总量',
            data:[42,42, 41,40, 37],
           
        }
    ]
        };
        return option;
    },
    render() {
        
        return (
            <div className='examples'>
                <div className='parent'>                
                    <ReactEcharts
                        option={this.getOtion()} 
                        style={{height: '200px', width: '100%'}} 
                        className='react_for_echarts' />
               </div>
            </div>
        );
    }
});

export default Hours;