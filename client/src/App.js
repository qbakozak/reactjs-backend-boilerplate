import React, { Component } from "react"
import { HashRouter, Route, Link, Switch } from "react-router-dom"

import Home from "./pages/Home"
import Page from "./pages/Page"
import NotFound from "./pages/NotFound"

import "./css/app.scss"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App
