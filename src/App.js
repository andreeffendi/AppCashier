import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'
import Login from './pages/Login';
import About from './pages/About'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <NavbarComponent />
          <main>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route  path="/home" component={Home} exact/>
              <Route  path="/about" component={About} />
              <Route  path="/sukses" component={Sukses} exact/>
            </Switch>
          </main>
      </BrowserRouter>
    )
  }
}