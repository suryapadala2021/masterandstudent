import './App.css'

import {Switch, Route} from 'react-router-dom'
import Login from './components/LoginRoute'
import Student from './components/Student'
import Master from './components/Master'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/student" component={Student} />
    <Route path="/master" component={Master} />
  </Switch>
)

export default App
