import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Weather from './Weather';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';

const iconStyles = {
  marginLeft: 50,
  width:50
};

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const Cardee = () => (
 <MuiThemeProvider muiTheme={getMuiTheme()}>
 <Card>

    <CardTitle title="Tips"  />
    <CardText>
        <HomeIcon style={iconStyles} />
       
        <HomeIcon style={iconStyles} color={blue500} />
        <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
         <div style={{marginTop:5,marginLeft:35}}>DRESSING <p style={{color:'gray',marginLeft:20}}>Cold</p> </div>
         <div style={{marginTop:-65,marginLeft:150}}>SPORTS <p style={{color:'gray',marginLeft:15}}>Unift</p> </div> 
         <div style={{marginTop:-65,marginLeft:240}}>UV INDEX <p style={{color:'gray',marginLeft:15}}>Moderate</p> </div>
    </CardText>
    <CardActions>
      <Weather/>
      
    </CardActions>
  </Card>
  </MuiThemeProvider>
);

export default Cardee;