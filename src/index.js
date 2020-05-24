import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HungryVegan from './components/HungryVegan'
import Roulette from './components/Roulette'
import './styles/styles.scss'
import * as serviceWorker from './serviceWorker'

const routes = (
  <Router>
    <Route exact path='/' component={HungryVegan} />
    <Route path='/spin' component={Roulette} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))

serviceWorker.unregister()
