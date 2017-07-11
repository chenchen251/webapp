import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [

  {
  	index:'WE',
    name: '03/01',
    status: '25~46',
   
  },
  {
  	index:'THU',
    name: '03/02',
    status: '27~55',
    
  
  },
  {
  	index:'FRI',
    name: '03/03',
    status: '27~55',

  },
 
];

export default class TableExample extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: false,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: false,
      height: '200px',
     
    };
  }
  render() {
    return (
      <div>
        <Table
          height={this.state.height}
            >
        
          <TableBody 
               displayRowCheckbox={false}>
            {tableData.map( (row, index) => (
              <TableRow 
                  selectable={false}  >
                <TableRowColumn><strong>{row.index}</strong></TableRowColumn>
                <TableRowColumn style={{color:'gray',width:'40'}}>{row.name}</TableRowColumn>
                  <TableRowColumn><img src="img/d.jpg" width="20px" height='20px'/></TableRowColumn>
                <TableRowColumn style={{color:'gray',width:'40'}}>{row.status}</TableRowColumn>
                
              </TableRow>
              ))}
          </TableBody>
       
        </Table>

       
      </div>
    );
  }
}