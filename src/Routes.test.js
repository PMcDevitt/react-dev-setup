'use strict'
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Route } from 'react-router'
import sinon from 'sinon'
import Routes from './Routes'

import HomePage from './components/home/HomePage.js'
import AboutPage from './components/about/AboutPage.js'

//import MainContainer from './components/home/HomePage'
//import App from './components/App'

describe('Given the Root component', function () {
  describe('When the render is called', function () {
    it('The paths map to the correct components', function () {
      const div = document.createElement('div')
      let wrapper = shallow(<Routes />, div)
      console.log(22, wrapper)
      const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        console.log(route)
        const routeProps = route.props()
        pathMap[routeProps.path] = routeProps.component
        return pathMap
      }, {})

      console.log(pathMap)

      expect(pathMap['/']).to.equal(HomePage)
      expect(pathMap['/about']).to.equal(AboutPage)
     // expect(pathMap['*']).to.equal(NotFound)
    })
  })

  xdescribe('When router updates', () => {
    it('it calls set and pageview on the analytics', sinon.test(() => {
      const setMock = sinon.spy()
      const pageviewMock = sinon.spy()

      const ReactGA = {initialize: ()=>{}, set: setMock, pageview: pageviewMock}
      const div = document.createElement('div')
      let wrapper = shallow(<Root analytics={ReactGA} />, div)

      const Router = wrapper.find('Router')
      Router.simulate('update')

      expect(setMock.calledOnce).to.be.true
      expect(pageviewMock.calledOnce).to.be.true
    }))
  })
})
