import {useState} from 'react'
import '../styles/Main.css'
import data from '../Data'

const Main = (props) => {
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [remark, setRemark] = useState('')
  
  const handleAnswerBtn = (isCorrect) => {
    if (isCorrect === true){
      setScore(score + 1)
    }
    handleNextQuestion()
  }
  
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    score < (data.length / 4) ? setRemark('poor') : score >= (data.length / 4) && score < (data.length / 2) ? setRemark('Good') : setRemark('Excellent')
  
  }
  
  const handleReload = () => window.location.reload()
  
  return (
    <>
      {(currentQuestion === data.length) 
      ? <><div className='score-div'>Your Quiz Score: {score}/{data.length}</div>
      <p className='remark'>{remark}</p>
      <button className='reset' onClick={handleReload}>Reset</button></> 
      : null}
      
     {(currentQuestion !== data.length) ? <main>
      <h2>{data[currentQuestion].question}</h2>
      <div>
      {data[currentQuestion].answerOptions.map((ansOptions) => (<button className='answerBtn' onClick={() => handleAnswerBtn(ansOptions.isCorrect)}>{ansOptions.answer}</button>))}
      </div>
    </main> : null}
  </>
    )
}
export default Main