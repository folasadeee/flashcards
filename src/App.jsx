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
      <div className='flex justify-center items-center min-h-screen backdrop-blur-sm'>
      <div className='
      flex flex-col justify-center items-center
      bg-white max-w-4xl min-w-96 p-8 text-center rounded-xl 
      drop-shadow-md

      mx-auto backdrop-blur-sm'>
        <div className='header-container flex flex-row justify-center items-center w-full'>
          <h1 className='text-6xl font-extrabold leading-none tracking-tight 
          text-left
          mx-8 max-w-xl break-normal'>Simpsons Trivia? <span className="underline decoration-pink-400 underline-offset-8 decoration-8">Woo-hoo!</span></h1>
          <img src='src/assets/donut-svgrepo-com.svg' className="object-contain h-48" />
        </div>
        <p className="text-2xl mb-6 text-gray-800 p-11">Think you're S-M-R-T? Test your knowledge of <i>The Simpsons</i> with these trivia questions!<br />
        <br/>
        Click the <b>flashcard</b> below to reveal the answer, and click the <b className="bg-slate-200 rounded-full px-5">Next</b> and <b className="bg-slate-200 rounded-full px-5">Last</b> buttons to navigate the card deck.</p>

        

      {shuffledData.length > 0 && (
        <Flashcard
          question={shuffledData[currentIndex].question}
          answer={shuffledData[currentIndex].answer}
          answerShown={answerShown}
          setAnswerShown={setAnswerShown}
          image={shuffledData[currentIndex].image}
        />
      )}


      <div className="flex flex-row justify-items-center gap-x-5 justify-center py-6">
      <button className='text-lg mx
                px-6 py-2 rounded-full bg-slate-200
                hover:bg-slate-300
                bg-clip-padding' onClick={handleLast}>Last</button>
        <button className="text-lg
                px-6 py-2 rounded-full bg-blue-800 hover:bg-blue-600 text-white         
                bg-clip-padding" onClick={handleNext}>
          Next
        </button>
      </div></div></div>
    </>
  );
}

export default App;
