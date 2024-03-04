const Flashcard = ({question, answer, answerShown, setAnswerShown, image}) => {

    function flipCard() { // Flip card to reveal answer when clicked
        setAnswerShown(!answerShown)
        console.log('Card was flipped')
        }    
    
       
    return (
        <div className='flashcard'>

            <div className='card' onClick={flipCard}>
                <img className='card-img' src={image} /><p>{answerShown ? answer : question}</p>
            </div>


        </div>
    )
}

export default Flashcard