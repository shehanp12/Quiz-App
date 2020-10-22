import React  from "react";
import { AnswerObject } from '../App';

type Props = {
    question:string;
    answers: string[];
    callback:any;
    userAnswer:any;
    questionNr:number;
    totalQuestions:number;
}

const QuestionCard : React.FC<Props>= ({
                                           question,
                                           answers,
                                           callback,
                                           userAnswer,
                                           questionNr,
                                           totalQuestions}) => (
              <div>
                  <p className="number">
                      Question:{questionNr}/{totalQuestions}
                  </p>
                  <p dangerouslySetInnerHTML={{__html:question}}/>

                      {answers}
                      {console.log(answers)}
                      {answers.map((answer) => (
                          <button disabled={userAnswer} value={answer} onClick={callback}>
                              <span dangerouslySetInnerHTML={{ __html: answer }} />
                          </button>
                      ))}
              </div>
);

export  default  QuestionCard;