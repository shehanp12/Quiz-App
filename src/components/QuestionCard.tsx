import React  from "react";
import { AnswerObject } from '../App';

type Props = {
    question:string;
    answers: string[];
    callback:any;
    userAnswer:AnswerObject | undefined;
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
                  {console.log(question)}
                  <p dangerouslySetInnerHTML={{__html:question}}/>

                  <div>
                      {answers.map((answer) => (
                          <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                              <span dangerouslySetInnerHTML={{ __html: answer }} />
                          </button>
                      ))}
              </div>
              </div>
);

export  default  QuestionCard;