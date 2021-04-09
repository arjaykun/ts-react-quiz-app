import React, { useContext } from 'react'
import { quizContext } from '../quizContext';
// Get AMOUNT
import { AMOUNT } from '../API';

const Header = () => {

  const { score, index, gameState } = useContext(quizContext);

  return (
    <div>
      <h1>Quiz App</h1>
      { gameState === 'on-game' && <>
        <h3>Score: {score} </h3>
        <h5>Question # {index + 1} out of {AMOUNT}</h5>
      </>}
    </div>
  )
}

export default Header
