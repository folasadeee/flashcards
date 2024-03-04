import { useState, useEffect } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

function App() {
  const flashcardData = [ // List of question/answer pairs to display
    { question: 'Who was the first character to speak in the first Star Wars film, A New Hope?', answer: 'C3PO', image: ''},
    { question: 'Question2', answer: 'Answer2'},
    { question: 'Question3', answer: 'Answer3'},
    { question: 'Question4', answer: 'Answer4'},
    { question: 'Question5', answer: 'Answer5'}
  ];

  const [shuffledData, setShuffledData] = useState([]); // Array to randomize order of cards
  const [currentIndex, setCurrentIndex] = useState(0); // Array to store current index
  const [answerShown, setAnswerShown] = useState(false); // Array to store current card state

  useEffect(() => { // Algorithm to randomize card order
    setShuffledData(shuffleArray([...flashcardData]));
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleNext() { // Function for next button
    if (currentIndex < shuffledData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setAnswerShown(false); // Display question first
    }
  }

  function handleLast() { // Function for last button
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setAnswerShown(false); // Display question first
    }
  }

  return (
    <>
      <div className='info'>
        <h1>Title</h1>
        <p>Description</p>
        <p><b>Number of Cards</b>: {shuffledData.length}</p>
        <p><b>Current Card:</b> {currentIndex + 1}/{shuffledData.length}</p>
      </div>

      {shuffledData.length > 0 && (
        <Flashcard
          question={shuffledData[currentIndex].question}
          answer={shuffledData[currentIndex].answer}
          answerShown={answerShown}
          setAnswerShown={setAnswerShown}
          image={shuffledData[currentIndex].image}
        />
      )}

      <div className='divider'></div>

      <div className='controlButtons'>
      <button className='lastButton' onClick={handleLast}>Last</button>
        <button className='nextButton' onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;
