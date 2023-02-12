import './index.css'
import {Component} from 'react'
import uuid from 'react-uuid'
import {Link} from 'react-router-dom'
import ProblemItem from '../ProblemItem'

class Master extends Component {
  state = {q: '', problems: []}

  componentDidMount() {
    const p = localStorage.getItem('problemsList')
    if (p !== null) {
      this.setState({problems: JSON.parse(p)})
    }
  }

  enteringQuestion = event => {
    this.setState({q: event.target.value})
  }

  one = () => 1

  two = () => 2

  three = () => 3

  four = () => 4

  five = () => 5

  six = () => 6

  seven = () => 7

  eight = () => 8

  nine = () => 9

  zero = () => 0

  findVal = n => {
    if (n === 'zero') {
      return this.zero()
    }
    if (n === 'one') {
      return this.one()
    }
    if (n === 'two') {
      return this.two()
    }
    if (n === 'three') {
      return this.three()
    }
    if (n === 'four') {
      return this.four()
    }
    if (n === 'five') {
      return this.five()
    }
    if (n === 'six') {
      return this.six()
    }
    if (n === 'seven') {
      return this.seven()
    }
    if (n === 'eight') {
      return this.eight()
    }

    return this.nine()
  }

  minus = (a, b) => a - b

  plus = (a, b) => a + b

  times = (a, b) => a * b

  divide = (a, b) => Math.floor(a / b)

  calculate = () => {
    const {q, problems} = this.state

    const [FirstNum, opera, SecNum] = q.split('(')
    const firstNum = this.findVal(FirstNum)
    const secNum = this.findVal(SecNum)

    let ans = null
    if (opera === 'plus') {
      ans = this.plus(firstNum, secNum)
    } else if (opera === 'minus') {
      ans = this.minus(firstNum, secNum)
    } else if (opera === 'divided_by') {
      ans = this.divide(firstNum, secNum)
    } else {
      ans = this.times(firstNum, secNum)
    }
    let p = localStorage.getItem('problemsList')
    const o = {
      q,
      ans,
      studentAns: '',
      id: uuid(),
    }
    if (p === null) {
      localStorage.setItem('problemsList', JSON.stringify([o]))
    } else {
      p = JSON.parse(p)
      p.push(o)

      localStorage.setItem(`problemsList`, JSON.stringify(p))
    }
    this.setState(prev => ({
      problems: [o, ...prev.problems],
      q: '',
    }))
  }

  render() {
    const {q, problems} = this.state

    return (
      <div className="master-container">
        <div className="master-header">
          <h1 className="master-heading">Master Portal</h1>
          <Link to="/login">
            <button type="button" className="logout-button">
              Logout
            </button>
          </Link>
        </div>
        <div className="question-box">
          <label htmlFor="question">ENTER THE QUESTION</label>
          <br />
          <input
            type="text"
            id="question"
            onChange={this.enteringQuestion}
            value={q}
          />
          <br />
          <button type="button" onClick={this.calculate}>
            cal
          </button>
        </div>
        <ul className="problems-list">
          {problems.map(each => (
            <ProblemItem key={each.id} problem={each} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Master
