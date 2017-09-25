import React, { Component } from "react"
import axios from "axios"
import { Container } from "reactstrap"

import Navigation from "../components/Navigation"

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      response: null,
      status: null
    }
  }

  componentDidMount() {
    var _this = this

    axios
      .get("/api/test")
      .then(response => {
        _this.setState({
          response: response.data.message,
          status: response.data.status
        })
      })
      .catch(err => {
        if (err.response.status === 401) {
          logoutUser()
        }
        _this.setState({
          response: "Error!!!"
        })
      })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container className="main-container">
          <h3>Home Page</h3>
          <p>
            Status from the api endpoint: <b>{this.state.status}</b>
            <br />
            Message from the api endpoint: <b>{this.state.response}</b>
          </p>
        </Container>
      </div>
    )
  }
}
