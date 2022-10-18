// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    status: false,
    timeElapsed: 0,
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({
      status: false,
      timeElapsed: 0,
    })
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({status: false})
  }

  onStart = () => {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1,
        status: true,
      }))
    }, 1000)
  }

  renderTimer = () => {
    const {timeElapsed} = this.state

    const minutes = Math.floor(timeElapsed / 60)
    const seconds = Math.floor(timeElapsed % 60)

    const stringifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringifiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {timeElapsed, status} = this.state
    console.log(timeElapsed, status)

    return (
      <div className="main-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="timer-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="stopwatch"
              />
              <h1 className="card-head">Timer</h1>
            </div>
            <h1 className="timer">{this.renderTimer()}</h1>
            <div className="button-container">
              <button
                className="start button"
                type="button"
                onClick={this.onStart}
              >
                Start
              </button>
              <button
                className="stop button"
                type="button"
                onClick={this.onStop}
              >
                Stop
              </button>
              <button
                className="reset button"
                type="button"
                onClick={this.onReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
