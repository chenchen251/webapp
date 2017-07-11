import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Speed from './Speed'
import SimpleChart from './SimpleChart';
import Dateaa from './Dateaa';
export default class Wind extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
    return (
      <div>
        <FlatButton
          label="More"
          onTouchTap={this.handleToggle}
        />
        <Drawer width={380} openSecondary={true} open={this.state.open} >
          <AppBar 
               title="Wind" 
               iconElementLeft={<IconButton onTouchTap={this.handleClose} ><NavigationClose /></IconButton>}/>
          <Card style={{margin:15}}>
              
              <CardText>
                    <Speed/>
              </CardText>
          </Card>  
          <Card style={{margin:15}}>
               <CardTitle title="Hourly Wind Speed(m/s)"/>
              <CardText>
                      <SimpleChart/>
              </CardText>
          </Card> 
          <Card style={{margin:15}}>
               <CardTitle title="Daily Forecast"/>
              <CardText>
                     <Dateaa/>
              </CardText>
          </Card> 
    
        </Drawer>

      </div>
     
      
 

      
    
    );
  }
}