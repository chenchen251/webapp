import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppBarExample from './AppBarExample';



const Title = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <AppBarExample 
            />
   
  </MuiThemeProvider>
);


export default Title;