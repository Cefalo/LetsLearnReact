import React, { Component } from "react"
import LoginModal from "./LoginModal"

class Login extends Component {
  state = {
    open: false
  }

  show = () => {
    this.setState({
      open: true
    })
  }

  hide = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          id="btn-login"
          className="btn btn-sm btn-outline-primary"
          onClick={this.show}
        >
          Login
        </button>
        <LoginModal open={this.state.open} hide={this.hide} show={this.show} />
      </React.Fragment>
    )
  }
}

export default Login
