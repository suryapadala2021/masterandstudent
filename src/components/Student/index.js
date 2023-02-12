import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import StudentItem from '../studentItem'

class Student extends Component {
  state = {problemsList: JSON.parse(localStorage.getItem('problemsList'))}

  showEmptyView = () => (
    <div className="empty-container">
      <p>No problems to Show</p>
    </div>
  )

  addAnswer = (unqId, ans) => {
    const {problemsList} = this.state
    const newList = problemsList.map(each => {
      if (each.id === unqId) {
        return {
          ...each,
          studentAns: ans,
        }
      }
      return each
    })
    localStorage.setItem('problemsList', JSON.stringify(newList))
    this.setState({problemsList: newList})
  }

  showContent = list => (
    <ul className="student-question-list">
      {list.map(each => (
        <StudentItem
          key={each.id}
          problem={each}
          fun={this.addAnswer}
          isAns={each.studentAns !== ''}
        />
      ))}
    </ul>
  )

  render() {
    const {problemsList} = this.state
    return (
      <div className="student-container">
        <h1 className="student-heading">Student Portal</h1>
        <Link to="/login">
          <button type="button" className="logout-button">
            Logout
          </button>
        </Link>
        <div className="student-content">
          {problemsList === null
            ? this.showEmptyView()
            : this.showContent(problemsList)}
        </div>
      </div>
    )
  }
}

export default Student
