import React  from "react"

type Props = {
    question:string;
    answer: string[];
    callback:any;
    userAnswer:string;
    questionNr:number;
    totalQuestions:number;
}

const QuestionCard = () => (
    <div>Question Card</div>
);

export  default  QuestionCard;