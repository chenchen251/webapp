import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import TableExampleSimple from './TableExampleSimple';
import Daily from './Daily';

import TableExample from'./TableExample';


const Cardbb = () => (
 <MuiThemeProvider muiTheme={getMuiTheme()}>
 <Card>

    <CardTitle title="Daily Forecast"  />
    <CardText >

       <TableExample/>
        
    </CardText>
    <CardActions>
        
       <Daily/>
  </CardActions>
  </Card>
  </MuiThemeProvider>
);


export default Cardbb;