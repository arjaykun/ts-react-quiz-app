import React, { useState } from 'react'
import Header from './components/Header'
import QuizBox from './components/QuizBox'
// get the appContext
import { quizContext } from './quizContext';
// get Type
import { Question} from './API';

const App = () => {

  const [gameState, setGameState] = useState<string>('start'); // start, on-game, gameover
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0)
  const [questions, setQuestions] = useState<Question[]>([]);


  const startGame = async() => { 
    setGameState("on-game")
  }

  return (
    <quizContext.Provider value={{ gameState, setGameState, score, setScore, index, setIndex, questions, setQuestions, startGame}} >
      <>
        <Header />
        <QuizBox />
      </>
    </quizContext.Provider>
  )
}

export default App

