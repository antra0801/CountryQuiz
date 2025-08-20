import { useState } from "react";
import { useCountries } from "../../Context/CountriesApi"
import Question from "../Questions/Question"

const Quiz =()=>{
    const {countries} = useCountries();
    const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);


  const handleAnswer = (questionIndex, answerIndex) => {
    // Update user's answer for the current question
  };

  const handleNextQuestion = (ques) => {
    setCurrentQuestion(ques)
    console.log(ques);
    
    // Move to the next question
  };

  const handlePrevQuestion = (ques) => {
    // Move to the previous question
    setCurrentQuestion(ques)
    console.log();
    
  };

  const handleFinishQuiz = () => {
    // Calculate the quiz result and show the result page

  };

  
  
    return(
        <>
        {/* <h1>Quiz Component</h1> */}
        <button className="btnQues" onClick={()=>handleNextQuestion(0)}>1</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(1)}>2</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(2)}>3</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(3)}>4</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(4)}>5</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(5)}>6</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(6)}>7</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(7)}>8</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(8)}>9</button>
        <button className="btnQues" onClick={()=>handleNextQuestion(9)}>10</button>

        <Question ques={currentQuestion} allcountries={countries}/>


        </>
    )
}

export default Quiz