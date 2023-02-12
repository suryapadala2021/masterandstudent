import './index.css'
import {Component} from 'react'
import {FaChalkboardTeacher} from 'react-icons/fa'

class Login extends Component {
  state = {username: '', password: '', type: 'master', error: false}

  componentDidMount() {
    const studentInfo = {
      userName: 'suryareddy',
      password: '123456',
      type: 'student',
    }
    const masterInfo = {
      userName: 'teja',
      password: '12345',
      type: 'master',
    }

    localStorage.setItem('student', JSON.stringify(studentInfo))
    localStorage.setItem('master', JSON.stringify(masterInfo))
  }

  submit = event => {
    event.preventDefault()
    const {username, password, type} = this.state
    let s = localStorage.getItem('student')
    s = JSON.parse(s)
    let m = localStorage.getItem('master')
    m = JSON.parse(m)

    if (type === 'student') {
      if (username === s.userName && password === s.password) {
        const {history} = this.props
        history.replace('/student')
      } else {
        this.setState({error: true})
      }
    } else if (type === 'master') {
      if (username === m.userName && password === m.password) {
        const {history} = this.props
        history.replace('/master')
      } else {
        this.setState({error: true})
      }
    }
  }

  changeUser = event => {
    this.setState({username: event.target.value})
  }

  changePass = event => {
    this.setState({password: event.target.value})
  }

  type = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {error} = this.state
    return (
      <div className="container">
        <div className="login-website-logo-container">
          <h1 className="main-heading">EduHub</h1>
          <FaChalkboardTeacher color="white" size={25} />
        </div>
        <div className="box">
          <h1 className="login-heading">Login</h1>
          <form className="login-up-form" onSubmit={this.submit}>
            <div className="input-container">
              <label htmlFor="username" className="label">
                USERNAME
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="input-ele"
                onChange={this.changeUser}
              />
            </div>
            <div className="input-container">
              <label htmlFor="pass" className="label">
                PASSWORD
              </label>
              <br />
              <input
                type="text"
                id="pass"
                className="input-ele"
                onChange={this.changePass}
              />
            </div>
            <div className="input-container">
              <label htmlFor="who" className="label">
                WHO YOU ARE?
              </label>
              <select className="input-ele" id="who" onChange={this.type}>
                <option value="master">Master</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div className="btn-container">
              <button type="submit" className="submit-btn">
                Login
              </button>
            </div>
          </form>
          {error && <p className="err-msg">Invalid Credentials</p>}
        </div>
      </div>
    )
  }
}

export default Login
