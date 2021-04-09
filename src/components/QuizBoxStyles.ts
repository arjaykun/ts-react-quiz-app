import styled from "styled-components";

export const QuizBoxWrapper = styled.div`
  background-color: #ffdcdc;
  padding: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StartButton = styled.button`
  background: #ff9292;
  background-image: -webkit-linear-gradient(top, #ff9292, #8f4343);
  background-image: -moz-linear-gradient(top, #ff9292, #8f4343);
  background-image: -ms-linear-gradient(top, #ff9292, #8f4343);
  background-image: -o-linear-gradient(top, #ff9292, #8f4343);
  background-image: linear-gradient(to bottom, #ff9292, #8f4343);
  -webkit-border-radius: 11;
  -moz-border-radius: 11;
  border-radius: 11px;
  font-family: Arial;
  color: #fff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: none;
  text-decoration: none;

  &:hover {
    background: #8f4343;
    text-decoration: none;
  }
`;

export const OptionButton = styled.button`
  border: none;
  margin: 5px 0;
  width: 100%;
  text-align: left;
  background-color: ${props => (props.answered && (props.isCorrect ? "#16c79a" : "#ec4646")) || "#ff9292"};
  color: #f7f7f7;
  padding: 10px 15px;
  border-radius: 11px;

  &:hover {
    background-color: #8f4343;
  }
`;

export const QuestionText = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 30px;
`;

export const NextButton = styled.button`
  margin-top: 30px;
  border: none;
  width: 100%;
  text-align: left;
  background-color: #333;
  color: #f7f7f7;
  padding: 10px;
  border-radius: 11px;
  padding: 15px;
  font-size: 1rem;
`;
