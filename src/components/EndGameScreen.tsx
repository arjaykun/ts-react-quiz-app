import React, { useContext } from 'react'
import { quizContext } from "../quizContext"
import { AMOUNT, Answer } from "../API";
// get helper
import { htmlParser } from "../utils";
// styles
import { EndGameScreenWrapper, Title, BackButton, Subtitle, QuestionWrapper, AnswerStatus, QuestionText, Scores, IsCorrect} from './EndGameScreenStyles';

const EndGameScreen = ({ answers }: { answers: Answer[] }) => {
  const { score, setGameState } = useContext(quizContext);

  return (
    <EndGameScreenWrapper>
      <Title>Game Over!</Title>

      <BackButton onClick={ () => setGameState("start") } >Back to Main</BackButton>
      
      <Scores>You scored {score} out of {AMOUNT} questions!</Scores>

      <hr />
      <Subtitle>Summary</Subtitle>
      <hr />

      { answers?.map((ans, i) => (
        <QuestionWrapper key={i}>
          <QuestionText>{htmlParser(ans.question)}</QuestionText>
          <AnswerStatus>
            Answer: {ans.answer} 
            <IsCorrect correct={ans.answer===ans.correctAnswer} >
              ({ans.answer===ans.correctAnswer? 'correct' : 'incorrect'})
            </IsCorrect> <br />
            {!ans.correct && "Correct answer: " + ans.correctAnswer}
          </AnswerStatus>
        </QuestionWrapper>
      ))}
    </EndGameScreenWrapper>
  )
}

export default EndGameScreen
