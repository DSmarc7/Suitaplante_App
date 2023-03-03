import { useState } from 'react'
import './App.css'
import plantLogo from './assets/Logos/logo_plant_mascote.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="#" target="_blank">
          <img src={plantLogo} className="plant_logo" alt="Plant logo" />
        </a>
      </div>
      <h1>Suitaplante</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
