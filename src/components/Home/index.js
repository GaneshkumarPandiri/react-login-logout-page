import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(item => ({count: item.count + 1}))
  }

  render() {
    const {count} = this.state
    let result
    if (count % 2 === 0) {
      result = (
        <div className="main-container">
          <div className="bg-container">
            <h1 className="main-heading">Please Login</h1>
            <button
              className="btn-style"
              type="button"
              onClick={this.onIncrement}
            >
              Login
            </button>
          </div>
        </div>
      )
    } else {
      result = (
        <div className="main-container">
          <div className="bg-container">
            <h1 className="main-heading">Welcome User</h1>
            <button
              className="btn-style"
              type="button"
              onClick={this.onIncrement}
            >
              Logout
            </button>
          </div>
        </div>
      )
    }
    return result
  }
}

export default Home
