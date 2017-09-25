import React, { Component } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap"
import axios from "axios"

import MdChip from "react-icons/lib/md/memory"
import MdBuild from "react-icons/lib/md/build"

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar color="faded" className="navbar-expand-lg navbar-light bg-light">
        <Container>
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/#/">
            <MdChip className="icon-position-fix" /> Site Name
          </NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavLink href="/#/">Home</NavLink>
              <NavLink href="/#/page">Page 1</NavLink>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}
