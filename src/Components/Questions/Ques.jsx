



import { useEffect, useState } from "react"
import { useCountries } from "../../Context/CountriesApi"
import "./Question.css"


const Question = ({ ques, onAttempt, selectedAnswer }) => {
  const { countries } = useCountries();

  const [options, setOptions] = useState([])

   useEffect(() => {
        if (countries.length > 0) {
            const wrongOptions = countries
                .filter(c => c.name.common !== countries[ques].name.common)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)

            const alloptions = [...wrongOptions, countries[ques]].sort(
                () => 0.5 - Math.random()
            )

            setOptions(alloptions)

            // reset states when new question comes
            // setIsCorrect(false)
            // setIsAttempted(false)
            // setSelectedOption("")
        }
    }, [ques, countries])



  const correctAnswer = countries[ques].name.common;

  const handleAns = (userAns) => {
    if (!selectedAnswer) {   // ✅ allow attempt only once
      onAttempt(userAns);
    }
  };

  return (
    <div>
      <h3>
        Which country does this <img src={countries[ques].flags.png} alt="flag" width="30" /> belong to? 
        
      </h3>

      <div className="Option-grid">
        {options.map((op, idx) => {
          const isSelected = selectedAnswer === op.name.common;
          const isCorrect = op.name.common === correctAnswer;

          return (
            <button
              key={idx}
              className={`OptionBtn ${isSelected ? (isCorrect ? "correct" : "wrong") : ""}`}
              onClick={() => handleAns(op.name.common)}
              disabled={!!selectedAnswer}   // ✅ disable after attempt
            >
              {idx + 1}. {op.name.common}
              {isSelected && (isCorrect ? " ✅" : " ❌")}
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default Question;
