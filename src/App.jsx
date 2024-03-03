import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='info'>
        <h1>Title</h1>
        <p>Description</p>
      </div>

      <div className='flashcard'>

        <div className='card'>Flashcard</div>
        
        <div className='controlButtons'>
          <button className='lastButton'>Last</button>
          <button className='nextButton'>Next</button>
        </div>

      </div>
    </>
  )
}

export default App
