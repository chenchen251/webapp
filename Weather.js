import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';
export default class Weather extends React.Component {

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
               title="360 Weather" 
               iconElementLeft={<IconButton onTouchTap={this.handleClose} ><NavigationClose /></IconButton>}/>
               
        </Drawer>
      </div>
    );
  }
}