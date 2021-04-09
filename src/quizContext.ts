import {createContext} from 'react';
import { Question } from './API';

export interface AppState {
    gameState: string,
    setGameState: React.Dispatch<React.SetStateAction<string>>,
    score: number,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    questions: Question[],
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>,
    startGame: () => void
  }
  
export const quizContext = createContext<AppState>(null!);
  