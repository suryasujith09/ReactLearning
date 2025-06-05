import React from 'react'
import {BrowserRouter as BrowserRouter, Routes, Route} from 'react-router-dom'
import InputPage from './Compontents/inputPage.jsx'
import DisplayPage from './DisplayPage'
function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">InputPage</a>
            </li>
            <li>
              <a href="/">DisplayPage</a>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <input id="input" type="text"></input>
      </div>

      <browserRouter>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </browserRouter>
    </>
  )
}
export default App
