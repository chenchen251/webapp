import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Sun from './Sun';
import ChartWithEventComponent from './ChartWithEventComponent';

const Carddd = () => (
 <MuiThemeProvider muiTheme={getMuiTheme()}>
 <Card>

    <CardTitle title="Sun&Moon"  />
    <CardText>
         <ChartWithEventComponent/>
         <p>Sunrise</p>
         <p>Sunset</p>
    </CardText>
    <CardActions>
      <Sun/>
      
    </CardActions>
  </Card>
  </MuiThemeProvider>
);

export default Carddd;