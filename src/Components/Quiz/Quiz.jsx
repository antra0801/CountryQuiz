import {useEffect, useState } from "react";
import axios from "axios";
// import { useCountries } from "../../Context/CountriesApi"
import Question from "../Questions/Question"
import Congratulations from "../Congratulations/Congratulations";
import "./Quiz.css"

const Quiz = () => {
    // const { countries } = useCountries();
    // const [attemptedQuestions, setAttemptedQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [countries, setCountries] = useState([]);
    // const [showResult, setShowResult] = useState(false);
  
//   const [randomQuestion , setRadomQuestions] =  useState([]);

//       const generateRandomNumbers = (length, min, max) => {
//     return Array.from({ length }, () =>
//       Math.floor(Math.random() * (max - min + 1)) + min
//     );
// }

//     const randomnum = generateRandomNumbers()
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags,capital,languages")
      .then((response) => setCountries(response.data.slice(0,10)))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);



    const handleAttempt = (questionIndex, selectedAnswer, isCorrect) => {
        setUserAnswers((prev) => {
            const newAnswers = [...prev];
            console.log(newAnswers);

            newAnswers[questionIndex] = { selectedAnswer, isCorrect };
            console.log(newAnswers);

            return newAnswers;
        });
    };

    const allAttempted = userAnswers.filter(Boolean).length === countries.length;
    console.log(allAttempted);


    const score = userAnswers.filter((ans) => ans?.isCorrect).length;

    //  move to specific question
    const handleNextQuestion = (ques) => {
        setCurrentQuestion(ques);
    };

    // const handlePrevQuestion = (ques) => {
    //     setCurrentQuestion(ques);
    // };

    // // ✅ finish quiz → show result
    // const handleFinishQuiz = () => {
    //     setShowResult(true);
    // };


    return (
        <>
            {/* <h1>Quiz Component</h1> */}
            {!allAttempted ? <div>
                {/* <button className="btnQues" onClick={() => handleNextQuestion(0)}>1</button>
                <button className="btnQues" onClick={() => handleNextQuestion(1)}>2</button>
                <button className="btnQues" onClick={() => handleNextQuestion(2)}>3</button>
                <button className="btnQues" onClick={() => handleNextQuestion(3)}>4</button>
                <button className="btnQues" onClick={() => handleNextQuestion(4)}>5</button>
                <button className="btnQues" onClick={() => handleNextQuestion(5)}>6</button>
                <button className="btnQues" onClick={() => handleNextQuestion(6)}>7</button>
                <button className="btnQues" onClick={() => handleNextQuestion(7)}>8</button>
                <button className="btnQues" onClick={() => handleNextQuestion(8)}>9</button>
                <button className="btnQues" onClick={() => handleNextQuestion(9)}>10</button> */}

                {countries.map((_, i) => (
                    <button
                        key={i}
                        className={`btnQues ${userAnswers[i] ? "attempted" : ""} ${currentQuestion === i ? "active" : ""}`}
                        onClick={() => handleNextQuestion(i)}
                    >
                        {i + 1}
                    </button>
                ))}

                <Question 
                countries={countries}
                ques={currentQuestion}
                    onAttempt={(selectedans, iscorrect) =>
                        handleAttempt(currentQuestion, selectedans, iscorrect)
                    }
                    attempted={userAnswers[currentQuestion]} />
            </div> : <Congratulations score={score} totalQuestions={countries.length} />
            }

        </>
    )
}

export default Quiz