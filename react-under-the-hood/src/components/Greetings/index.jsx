import React, {useState} from 'react'
import './index.css'

const Greetings = () => {
  const [userInput, setUserInput] = useState('')

  const onChangeUserInput = event => {
    setUserInput(event.target.value)
  }

  return (
    <div className="greetings-container">
      <div className="responsive-container">
        <input
          type="text"
          className="input-field"
          value={userInput}
          onChange={onChangeUserInput}
        />
        <p className="paragraph">Hello, {userInput}</p>
      </div>
    </div>
  )
}

export default Greetings
