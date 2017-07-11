import React from 'react';
import ReactEcharts from './echarts-for-react';

const ChartWithEventComponent = React.createClass({
   
    getOtion: function() {
        const option = {
           series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
          
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
             
            },
           
            data:[
                {value:335, name:'day'},
                {value:310, name:'night'},
               
            ],
             color:[  
                '#4F94CD',
            	'#FFC125'
               
            ],
           
        }
    ]
        };
        return option;
    },
  
    get: function() {
        const option = {
           series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
          
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
             
            },
           
            data:[
                {value:335, name:'day'},
                {value:310, name:'night'},
               
            ],
             color:[   
                  '#87CEFA',
            	  '#EEDC82',        	
            
            ],
        }
    ]
        };
        return option;
    },
      
      bing: function() {
        const option = {
    
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'18'},
                {value:310, name:'6'},
             
            ],
              color:[   
                  
            	  '#B2DFEE',  
            	   '#EEEED1',
            
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
        };
        return option;
    },
    render: function() {
 

        return (
            <div className='examples'>
                <div className='parent'>
                   <ReactEcharts
                        option={this.getOtion()} 
                        style={{height: 250,marginTop:'5px'}} 
                       
                       />
                     <ReactEcharts
                        option={this.get()} 
                        style={{height: 200,marginTop:'-220px'}} 
                       
                       />
                    <ReactEcharts
                        option={this.bing()} 
                        style={{height: 180,marginTop:'-208px'}} 
                       
                       />
                </div>
            </div>
           
        );
    }
});

export default ChartWithEventComponent;