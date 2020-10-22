import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions} from './API';
//Components
//types

const App =() => {

    const TOTAL_QUESTIONS = 10;

    console.log(fetchQuizQuestions(TOTAL_QUESTIONS,Difficulty.EASY))


    const [loading,setLoading] = useState(false);
    const [questions,setQuestions] = useState([]);
    const [number,setNumber] = useState(0);
    const [userAnswers,setUserAnswers] = useState([]);
    const  [score,setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);





    const startTrivia = async () => {

    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{

    }

    const  nextQuestion = () => {

    }



  return (
    <div className="App">
     <h1>React Quiz</h1>
     <button className="start" onClick={startTrivia}>
         start
     </button>
        <p className="score">Score: </p>
        <p>Loading Questions..</p>
        {/*<QuestionCard*/}
        {/*    questionNr={number +1}*/}
        {/*    totalQuestions={TOTAL_QUESTIONS}*/}
        {/*    question={questions[number].question}*/}
        {/*    answers={questions[number].answers}*/}
        {/*    userAnswer={userAnswers ? userAnswers[number]:undefined}*/}
        {/*    callback={checkAnswer}/>*/}


        <button className="next" onClick={nextQuestion}>
            Next Question
        </button>


    </div>
  );
}

export default App;
