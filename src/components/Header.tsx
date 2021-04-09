import React, { useContext } from 'react'
import { quizContext } from '../quizContext';
// Get AMOUNT
import { AMOUNT } from '../API';
// styles
import { HeaderWrapper, Title, Score, Index } from './HeaderStyles';

const Header = () => {

  const { score, index, gameState } = useContext(quizContext);

  return (
    <HeaderWrapper>
      <Title>Quiz App</Title>
      { gameState === 'on-game' && <>
        <Score>Score: {score} </Score>
        <Index>Question # {index + 1} out of {AMOUNT}</Index>
      </>}
    </HeaderWrapper>
  )
}

export default Header
