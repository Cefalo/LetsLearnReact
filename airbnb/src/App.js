import React from "react"
import Home from "./components/Home"
import { ThemeContext } from "./contexts/theme"
import Login from "./components/Login"

class App extends React.Component {
  state = {
    theme: "light"
  }

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light"
    })
  }

  render() {
    return (
      <div className="container">
        {/*JUMBO TEXT*/}
        <div className="row align-self-end">
          <div className="col-auto mr-auto" />
          <div className="col-auto">
            <Login />
            <button
              type="button"
              className={`btn btn-toggle mr-0 mb-1 mt-1 ${this.state.theme ===
                "light" && "active"}`}
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
              onClick={this.toggleTheme}
            >
              <div className="handle" />
            </button>
          </div>
        </div>
        <div className="row">
          <div className="jumbotron">
            <h1 className="display-4">Thinking in React!</h1>
            <p className="lead">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
          </div>
        </div>
        <ThemeContext.Provider value={this.state.theme}>
          <Home />
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
