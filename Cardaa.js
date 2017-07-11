import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Hours from './Hours';


const Cardaa = () => (
<MuiThemeProvider muiTheme={getMuiTheme()}>
 <Card>

    <CardTitle title="24Hours"/>
       <CardText>
            <Hours/>
    </CardText>


  </Card>
  </MuiThemeProvider>
);


export default Cardaa;