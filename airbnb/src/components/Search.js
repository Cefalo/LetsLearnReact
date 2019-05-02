import React, { Component } from "react"

class Search extends Component {
  state = {
    term: ""
  }

  changeTerm = e => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="form-row">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Search Places"
                value={this.state.term}
                onChange={this.changeTerm}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Search
