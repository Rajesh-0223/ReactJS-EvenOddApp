// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onClickIncrementButton = () => {
    const randomNum = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd-text">Count is {countText}</p>
          <button
            className="button"
            type="button"
            onClick={this.onClickIncrementButton}
          >
            Increment
          </button>
          <p className="description">
            *Increase by random number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
