import  { useContext } from 'react'
import { quizContext } from '../quizContext';
import EndGameScreen from './EndGameScreen';
// get ENUM, Types
import { AMOUNT } from '../API';
// get helper
import { questionParser } from '../helpers/questionParser';
// styles
import { QuizBoxWrapper, StartButton, OptionButton, QuestionText, NextButton } from './QuizBoxStyles'

const QuizBox = () => {
    const { gameState, setGameState, questions, index, setIndex, setScore, answers, setAnswers } = useContext(quizContext);

    const nextIndex = (): void => {
        if ((index + 1) === AMOUNT)
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
        <QuizBoxWrapper>
            { gameState === 'start' && <StartButton onClick={() => setGameState('on-game')}>Start Quiz</StartButton>}
            { gameState === 'on-game' &&
                <>
                    <QuestionText>{questionParser(questions[index]?.question)}</QuestionText>
                    {
                        questions[index]?.options.map((option, i) => (
                            <div key={i}>
                                <OptionButton
                                    onClick={() => handleAnswer(option)}
                                    disabled={!!answers[index]}
                                    answered={!!answers[index]}
                                    isCorrect={Boolean(answers[index]) && (option === questions[index].correctAnswer)} 
                                >
                                    {option}
                                </OptionButton>
                            </div>
                        ))
                    }
                    <NextButton onClick={nextIndex}>Next</NextButton>
                </>
            }
            { gameState === 'gameover' && (<EndGameScreen answers={answers}></EndGameScreen>)}
        </QuizBoxWrapper>
    )
}

export default QuizBox
