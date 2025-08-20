
const Congratulations =({score, totalQuestions})=>{
    return(
        <>
        <h2>🎉 Congratulations! You finished the quiz 🎉</h2>
        <p>
          You scored <b>{score}</b> out of {totalQuestions}
        </p>
        </>
    )
}

export default Congratulations