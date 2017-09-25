import React, { Component } from "react"
import { Container } from "reactstrap"

import Navigation from "../components/Navigation"

export default class Page extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Container className="main-container">
          <h3>Page 1</h3>
          <p>The Other Page</p>
        </Container>
      </div>
    )
  }
}
