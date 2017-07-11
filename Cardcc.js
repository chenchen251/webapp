import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import SvgIconFace from 'material-ui/svg-icons/action/face';
import {blue300, indigo900} from 'material-ui/styles/colors';
import Wind from './Wind';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

var names=[3,2,2,2,2];

const Cardcc = () => (
 <MuiThemeProvider muiTheme={getMuiTheme()}>
 <Card>

    <CardTitle title="Wind "  />
    <CardText>
 
        <div style={{marginLeft:200,size:20}}><strong>Light Wind</strong></div>
        <div style={{marginLeft:220,color:'gray'}}>south</div>
       
    </CardText>
    <CardActions>
       <Wind/>
      
    </CardActions>
  </Card>
  </MuiThemeProvider>
);


export default Cardcc;