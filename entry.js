import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import DrawerOpenRight from './DrawerOpenRight.js';

import Title from './Title';
import Cardaa from './Cardaa';
import Cardbb from './Cardbb';
import Cardcc from './Cardcc';
import Carddd from './Carddd';
import Cardee from './Cardee';
import SimpleChart from './SimpleChart';
import Donghua from './Donghua';

injectTapEventPlugin();




ReactDOM.render(
  <Title />,
  document.getElementById('head')
);
ReactDOM.render(
  <Donghua />,
 document.getElementById('donghua')
);

ReactDOM.render(
  <Cardaa />,
  document.getElementById('card_one')
);

ReactDOM.render(
  <Cardbb />,
  document.getElementById('card_two')
);
ReactDOM.render(
  <Cardcc />,
  document.getElementById('card_three')
);
ReactDOM.render(
  <Carddd />,
  document.getElementById('card_four')
);
ReactDOM.render(
  <Cardee />,
  document.getElementById('card_five')
);


