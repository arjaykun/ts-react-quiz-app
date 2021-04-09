import React, { useContext } from 'react'
import { quizContext } from "../quizContext"
import { AMOUNT, Answer } from "../API";

const EndGameScreen = ({ answers }: { answers: Answer[] }) => {
  const { score } = useContext(quizContext);

  return (
    <div>
      <h2>Game Over!</h2>

      <h3>You scored {score} out of {AMOUNT} questions!</h3>

      <hr />
      <h3>Summary</h3>
      { answers?.map(ans => (
        <div>
          <h4>{ans.question}</h4>
          <p>
            Answer: {ans.answer} {ans.correct ? <span>(correct)</span> : <span>(incorrect)</span>} <br />
            {!ans.correct && "Correct answer: " + ans.correctAnswer}
          </p>
        </div>
      ))}
    </div>
  )
}

export default EndGameScreen
