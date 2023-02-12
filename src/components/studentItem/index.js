import './index.css'
import {Component} from 'react'

class StudentItem extends Component {
  state = {ans: ''}

  answer = event => {
    this.setState({ans: event.target.value})
  }

  submit = () => {
    const {fun, problem} = this.props
    const {id} = problem
    const {ans} = this.state
    fun(id, ans)
  }

  render() {
    const {problem, isAns} = this.props
    const {ans} = this.state
    const {q} = problem
    return (
      <li className="student-item-question">
        <p>{q}</p>
        {isAns && <p>{ans}</p>}
        {!isAns && <input type="text" onChange={this.answer} value={ans} />}
        <br />
        <button type="button" onClick={this.submit} disabled={isAns}>
          submit
        </button>
      </li>
    )
  }
}
export default StudentItem
