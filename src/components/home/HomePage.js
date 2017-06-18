'use strict'
import React from 'react'
import {Link} from 'react-router' // eslint-disable no-unused vars

class HomePage {
  render () {
    return (
      <div className='jumbotron'>
        <h1>Project Setup For React</h1>
        <p>React and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
      </div>
    )
  }
}

export default HomePage
