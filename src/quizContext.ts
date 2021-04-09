import {createContext} from 'react';
import { Question,Answer } from './API';

export interface AppState {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    questions: Question[],
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>,
    answers: Answer[],
    setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>,
    startGame: () => void,
  }
  
export const quizContext = createContext<AppState>(null!);
  