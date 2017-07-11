import React, { Component } from 'react';
import { render } from 'react-dom';
import Transform from './transform.react.js';//动画引入

class Donghua extends Component {

  constructor(props, context) {
    super(props, context);
    this.step = 0.01;//变换速度
    this.xStep = 3;
    this.skewStep =1;
    this.state = {
      el6: {scaleX: 1, scaleY: 1},  
    };
    this.animate = this.animate.bind(this);
  }

  animate() {
    this.state.el6.scaleX < 0.5 && (this.step *= -1);
    this.state.el6.scaleX > 1.5 && (this.step *= -1);
    this.setState({   
      el6: {
        scaleX: this.state.el6.scaleX + this.step,
        scaleY: this.state.el6.scaleY + this.step
      },
     
    }, () => {
      requestAnimationFrame(this.animate);
    });
  }
  componentDidMount() {
    setTimeout(this.animate, 100);
  }
  render() {
    return (
      <div>
        
         <Transform scaleX={this.state.el6.scaleX} scaleY={this.state.el6.scaleY} className="test" 
         style={{'backgroundColor': '#EEFF41', 'width':'80px','height':'80px','marginLeft':'200px','marginTop':'50px','border-radius':'40px','opacity':'0.6'}}>               
        </Transform> 
      </div>
    );
  }
}
export default Donghua;