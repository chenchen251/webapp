import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import City from './City';
import Drawer from 'material-ui/Drawer';
import Settings from './Settings';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Router, Route, IndexRoute, IndexLink, Link } from 'react-router';

function handleTouchTap() {
 var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
alert(year+'年'+month+'月'+day+'日 '+hour+':'+minute+':'+second)
}

var App = React.createClass({ 
	render()
	{ 
		return (
		<div > 
		<h1>Simple SPA</h1>
		<ul className="header">
		<li>Home</li> 
		<li>Stuff</li>
		<li>Contact</li>
       </ul> 
    <div className="content">
         {this.props.children} 
     </div> 
</div>
	)
		} });




const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton> <MoreVertIcon /> </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
     <a href="examples/a.html" > <MenuItem primaryText="Setting" /></a>
     <a href="examples/b.html"> <MenuItem primaryText="Feedback" /> </a>
   
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarExample extends Component {

 
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
      <div>
        <AppBar
           title="City"
           iconElementRight={this.state.logged ? <Logged /> : <Login />}
           onLeftIconButtonTouchTap={this.handleToggle} 
           onRightIconButtonTouchTap={this.handleTouchTap}
           zDepth={2}
         >
   
       <Drawer
          docked={false}
          width={300}         
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          zDepth={3}     
       
 >
           <Card style={{marginTop:30,margin:20}}  zDepth={2}  
                  onTouchTap={this.handleClose}
                  >
                 <CardTitle title="BeiJing"/>
                    <CardText>
                        gfgfg
                    </CardText>
          </Card>
          <Card style={{margin:20 }} zDepth={2} 
                onTouchTap={this.handleClose}>
                 <CardTitle title="ShangHai"/>
                    <CardText>
                        gfgfg
                    </CardText>
          </Card>
         
        </Drawer>
             
        </AppBar>
  
      </div>
    );
  }
}

export default AppBarExample;