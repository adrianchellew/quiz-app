import React, {useState} from 'react';
// Import the question data
import {questions} from './questions';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    // Find and return the correct answer option
    const getCorrectAnswer = (answers) => {
        for (let i = 0; i < answers.length; i++) {
          if (answers[i].isCorrect) {
            return answers[i].answerText;
          }
        }
    }

    const answerOptionClickHandler = (isCorrectAnswer) => {
      // Increase the score if the answer is correct
      if (isCorrectAnswer) {
        setScore(score + 1);
      }
      // Show the next question or show the score if the quiz is over
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }

    // Refresh the quiz
    const resetQuiz = () => {
      setShowScore(false);
      setScore(0);
      setCurrentQuestion(0);
    }
  
    return (
      <div className='card w-75 mb-3 mx-auto'>
        <div className='card-body'>
          {showScore ? (
            /* Show the score section if showScore has been set to true */
            <div className='score-section'>
              <div className='score mb-4'>
                <span className='h2'>You scored {score} out of {questions.length}.</span>
              </div>
              <h2 className='h5 mb-3'>The correct answers are...</h2>
              {questions.map((question, index) => (
                <div key={index}>
                  <p>{question.questionText}</p>
                  <p className='text-success font-weight-bold'>{getCorrectAnswer(question.answers)}</p>
                </div>
              ))}
              <button type='button' className='btn btn-info btn-block' onClick={resetQuiz}>Try again</button>
            </div>
          ) : (
            /* Show the questions if showScore has been set to false */
            <>
            <div className='question-section'>
              <div className='question-count'>
                <h2 className='h4'>Question {currentQuestion + 1}/{questions.length}</h2>
              </div>
              <div className='question-text my-3'>
                <h3 className='h5'>{questions[currentQuestion].questionText}</h3>
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answers.map((answer, index) => (
                <button key={index} type='button' className='btn btn-info btn-block' onClick={() => answerOptionClickHandler(answer.isCorrect)}>{answer.answerText}</button>
              ))}
            </div>
            </>
          )}
        </div>
      </div>
    );
}

export default Quiz;