import ReactHtmlParser from 'react-html-parser';
 
export const questionParser = (question:string): string => {
    return ReactHtmlParser(question);
}