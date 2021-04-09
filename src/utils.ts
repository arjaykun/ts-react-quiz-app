import ReactHtmlParser from 'react-html-parser';
 
export const htmlParser = (question:string): string => {
    return ReactHtmlParser(question);
}

export const sortOptions = (options:string[]):string[] => {
    return options?.sort(()=> Math.random() - 0.5);
}