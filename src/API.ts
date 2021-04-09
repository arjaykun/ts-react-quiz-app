import axios from "axios";

const URI = "https://opentdb.com/api.php"; // ?amount=10&category=20&difficulty=easy&type=multiple

export enum DIFFICULTY {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}


export type Question = {
    category: string;
    question: string,
    options: string[],
    correctAnswer: string
}

export type Answer = {
    question: string,
    answer: string,
    correctAnswer: string,
    correct: boolean
}

export const AMOUNT = 2;

export const getQuestions = async (difficulty: DIFFICULTY) : Promise<Question[]> => {
    const questions = await axios.get(`${URI}?amount=${AMOUNT}&difficulty=${difficulty}`);
    const result = questions.data.results;

    return result.map( (res: any) => ({
        category: res.category, 
        question: res.question,
        options: [...res.incorrect_answers, res.correct_answer],
        correctAnswer: res.correct_answer
    }));
}
