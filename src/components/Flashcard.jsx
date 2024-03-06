const Flashcard = ({question, answer, answerShown, setAnswerShown, image}) => {

    function flipCard() { // Flip card to reveal answer when clicked
        setAnswerShown(!answerShown)
        console.log('Card was flipped')
        }    
    
       
    return (
        <div onClick={flipCard}
        className="text-2xl 
                bg-amber-100 max-w-4xl min-w-96 p-8 text-center 
                drop-shadow-md
                hover:drop-shadow-xl
                transition-all duration-300 ease-in-out
                ">
                <p>{answerShown ? answer : question}</p>
           

        </div>
    )
}

export default Flashcard