import Clock from './components/Clock'
import {useState} from 'react'

import './App.css'

const App = () => {
  const [isMounted, setIsMounted] = useState(true)
  return (
    <div className="app-container">
      <button type="button" className="toggle-btn" onClick={onToggleClock}>
        Hide Clock
      </button>
      <Clock />
    </div>
  )
}

export default App
