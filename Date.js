import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

// Table data as a list of array.
const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3'],
  // .... and more
];

export default class Date extends React.Component {

  render() {
    return (
      <div>
         <table style={{marginLeft:20,border:2}} cellSpacing="10">
            <tr >
              <td><strong>FRI</strong></td>
              <td>2/10</td>
              <td>19~41</td>
            
           </tr>
           <tr>
                 <td><strong>FRI</strong></td>
              <td>2/10</td>
              <td>19~41</td>
           </tr>
            <tr>
                 <td><strong>FRI</strong></td>
              <td>2/10</td>
              <td>19~41</td>
           </tr>
        </table>
      </div>
    );
  }
}
