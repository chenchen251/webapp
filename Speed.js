import React from 'react';
import ReactEcharts from './echarts-for-react';

const Speed = React.createClass({
   
    getOtion: function() {
        const option = {
      
 
    series: [
        {
           
            type: 'gauge',
            detail: {formatter:'{value}m/s'},
            data: [{value: 30}], 
         
            radius: '85%',
             axisTick:{
             	show:'false',
             	length:'0'
             },
            axisLable:{
            	distance:'3',
            },
        },
  
      
 ],
    
      };
      setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);

        return option;
    },
  
   
    render: function() {
 

        return (
            <div className='examples' style={{marginLeft:'80'}}>
                 <div className='parent'>
                 <h3>Speed</h3>
                   <ReactEcharts
                        option={this.getOtion()} 
                        style={{width:200,height: 250,marginTop:'5px',marginRight:'50px',size:'5px'}} 
                       
                       />
                  
                </div>
            </div>
           
        );
    }
});

export default Speed;