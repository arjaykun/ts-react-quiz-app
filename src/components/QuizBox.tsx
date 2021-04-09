import React, { useContext, useEffect, useState } from 'react'
import { quizContext } from '../quizContext';
import EndGameScreen from './EndGameScreen';
// get questions from api
import { getQuestions } from '../API';
// get ENUM, Types
import { DIFFICULTY, AMOUNT, Answer } from '../API';



const QuizBox = () => {
    const { gameState, setGameState, questions, setQuestions, index, setIndex, setScore } = useContext(quizContext);
    const [answers, setAnswers] = useState<Answer[]>([])

    useEffect(() => {
        fetchQuestions();
        //eslint-disable-next-line
    }, [])

    const fetchQuestions = async () => {
        setQuestions(await getQuestions(DIFFICULTY.MEDIUM));
    }

    const nextIndex = (): void => {
        if((index + 1)=== AMOUNT) 
            setGameState('gameover')
        else
            setIndex(index + 1);
    }

    const handleAnswer = (answer: string): void => {
        const isCorrect: boolean = checkAnswer(answer);
        setAnswers(prevAns => [...prevAns, {
            question: questions[index].question,
            answer,
            correctAnswer: questions[index].correctAnswer,
            correct: isCorrect
        }]);
    }

    const checkAnswer = (answer: string): boolean => {
        if (questions[index].correctAnswer === answer) {
            setScore(prevScore => prevScore + 1);
            return true;
        }
        return false;
    }

    return (
        <div>
            { gameState === 'start' && <button onClick={() => setGameState('on-game')}>Start Quiz</button>}
            { gameState === 'on-game' &&
                <>
                    <h3>{questions[index]?.question}</h3>
                    {
                        questions[index]?.options.map((option, i) => (
                            <div key={i}>
                                <button onClick={() => handleAnswer(option)} disabled={!!answers[index]} >{option}</button>
                            </div>
                        ))
                    }
                    <button onClick={nextIndex}>Next</button>
                </>
            }
            { gameState === 'gameover' && (<EndGameScreen answers={answers}></EndGameScreen>)}
        </div>
    )
}

export default QuizBox
