import Clock from './components/Clock'
import {useState} from 'react'

import './App.css'

const App = () => {
  const [isMounted, setIsMounted] = useState(true)
  const onToggleClock = () => {
    setIsMounted(prevIsMounted => !prevIsMounted)
  }

  return (
    <div className="app-container">
      <button type="button" className="toggle-btn" onClick={onToggleClock}>
        {isMounted ? 'Hide Clock' : 'Show Clock'}
      </button>
      {isMounted && <Clock />}
    </div>
  )
}

export default App
