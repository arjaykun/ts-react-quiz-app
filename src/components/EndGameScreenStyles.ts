import styled from 'styled-components';

export const EndGameScreenWrapper = styled.div`
    text-align: center;
`;


export const Title = styled.h2`
    font-size: 5rem;
    font-family: 'Gochi Hand', cursive;
    margin-bottom: 15px;
    color: #ff9292;
`;

export const Scores = styled.h5`
    font-size: 2rem;
    margin-bottom: 30px;
`;

export const Subtitle = styled.h2`
    padding: 15px 0;
`;
export const QuestionText = styled.h2``;

export const BackButton = styled.div`
    border: none;
    background-color: #333;
    width: 360px;
    margin: 0 auto;
    color: #fff;
    padding: 12px;
    border-radius: 11px;
    margin-bottom: 30px;
`;

export const QuestionWrapper = styled.div`
    padding: 15px 0;
    text-align: left;
`;

export const AnswerStatus = styled.div`
    padding-top: 15px;
`;

export const IsCorrect = styled.span`
    margin-left: 5px;
    color: ${ props => props.correct ? '#16c79a' : '#ec4646'}
` 