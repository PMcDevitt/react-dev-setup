'use strict'
import React from 'react'
import PropTypes from 'prop-types'

class App {
  render () {
    return (
      <div className='container-fluid'>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App
