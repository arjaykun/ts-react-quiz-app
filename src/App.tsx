import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import QuizBox from "./components/QuizBox";
// get the appContext
import { quizContext } from "./quizContext";
// get Type
import { Question,DIFFICULTY, getQuestions, Answer } from "./API";
// Global Style
import GlobalStyle from "./GlobalStyles";
// styles
import { Wrapper, InnerWrapper } from "./AppStyles";

const App = () => {
  const [gameState, setGameState] = useState<string>("start"); // start, on-game, gameover
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([])


  useEffect(() => {
    if(gameState==='start') {
      fetchQuestions();
      resetState();
    }
    //eslint-disable-next-line
  }, [gameState])

  const fetchQuestions = async () => {
    const questions = await getQuestions(DIFFICULTY.MEDIUM);
    setQuestions(questions);
  }

  const resetState = () => {
    setScore(0);
    setIndex(0);
    setAnswers([]);
  }


  const startGame = async () => {
    setGameState("on-game");
  };

  return (
    <quizContext.Provider
      value={{
        gameState,
        setGameState,
        score,
        setScore,
        index,
        setIndex,
        questions,
        setQuestions,
        startGame,
        answers,
        setAnswers
      }}
    >
      <>
        <GlobalStyle />
        <Wrapper>
          <InnerWrapper>
            <Header />
            <QuizBox />
          </InnerWrapper>
        </Wrapper>
      </>
    </quizContext.Provider>
  );
};

export default App;
