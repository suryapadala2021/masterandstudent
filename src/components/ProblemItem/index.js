import './index.css'

const ProblemItem = props => {
  const {problem} = props
  const {q, ans, studentAns} = problem
  const a = studentAns === '' ? '?' : studentAns
  console.log(q, ans)
  return (
    <li className="question-item">
      <p>{q}</p>
      <p>{ans}</p>
      <p>studentAns: {a}</p>
    </li>
  )
}
export default ProblemItem
