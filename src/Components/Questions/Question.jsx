import { useEffect, useState } from "react"
import { useCountries } from "../../Context/CountriesApi"
import "./Question.css"

const Question = ({ countries, ques, onAttempt, attempted }) => {
    // const { countries } = useCountries()

    const [isCorrect, setIsCorrect] = useState(false)
    const [isAttempted, setIsAttempted] = useState(false)
    const [selectedOption, setSelectedOption] = useState("")
    const [options, setOptions] = useState([])


    // console.log(countries[0]['flags']['png']);



    //     const generateRandomNumbers = (length, min, max) => {
    //     return Array.from({ length }, () =>
    //       Math.floor(Math.random() * (max - min + 1)) + min
    //     );
    // }

    // console.log(countries[ques].name.common);

    // const wrongOptions = countries
    //     .filter(c => {
    //         // console.log(c.name.common); 
    //         return c.name.common !== countries[ques].name.common
    //     })
    //     .sort(() => 0.5 - Math.random())
    //     .slice(0, 3);

    // // console.log(ques);

    // const alloptions = [...wrongOptions, countries[ques]].sort(() => 0.5 - Math.random());

    // setOptions(alloptions)

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
            setIsCorrect(false)
            setIsAttempted(false)
            setSelectedOption("")
        }
    }, [ques, countries])

    if (!countries || countries.length === 0) {
        return <h3>Loading...</h3>
    }


    const handleAns = (userAns) => {
        if (!isAttempted) {
            const correct = userAns === countries[ques].name.common
            setSelectedOption(userAns);
            setIsCorrect(correct);
            setIsAttempted(true);

            onAttempt(userAns,correct)
        }
    };


    // console.log(options);

    return (
        <>
            {/* {
                countries.map((country, idx)=>{
                    return(
                    <h3>Which Country does this <img src={countries[idx].flags.png} alt="flag" height="20px" width="25px" /> belongs to? </h3>
                    )
                })
            } */}

            <h3 className="question">{ques + 1}. Which Country does this <img 
                 src={countries[ques].flags.png} 
                 alt="flag" 
                 height="20px" 
                 width="25px" />  belongs to? </h3>

            <div className="Option-grid">

                {
                    options.map((op, idx) => {
                        const isSelected = selectedOption === op.name.common; // ✅ track which was clicked

                        return (
                            <button
                                key={idx}
                                className="OptionBtn"
                                onClick={() => {
                                    // onAttempt(op.name.common, isSelected)
                                    handleAns(op.name.common)
                                }}
                            >
                                {idx + 1}. {op.name.common}{" "}
                                {isAttempted && isSelected && (isCorrect ? "✅" : "❌")}
                            </button>
                        );
                    })
                }


            </div>

        </>
    )
}

export default Question