import React from 'react'
import { render } from 'react-dom';
import { Link } from 'react-router'

var Home = React.createClass({
  render() {
    return (
      <div>
        <h2>Reactjs之alt框架实战:</h2>
        <ul >
          <li><Link to='/location'>mingshengguji</Link></li>
        </ul>
      </div>
    )
  }
})

module.exports = Home;