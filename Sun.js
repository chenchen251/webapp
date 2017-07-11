import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TableExample from './TableExample';

export default class Sun extends React.Component {

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
               title="Sun & Moon" 
               iconElementLeft={<IconButton onTouchTap={this.handleClose} ><NavigationClose /></IconButton>}/>
          <Card style={{margin:15}} >
                <CardTitle title="Lunar Phase"/>
              <CardText>
                  dfdfdfd
              </CardText>
          </Card>   
            <Card style={{margin:15}}>
                <CardTitle title="Daily Forecast"/>
              <CardText>
                 <TableExample/>
              </CardText>
          </Card> 
        </Drawer>
      </div>
    );
  }
}