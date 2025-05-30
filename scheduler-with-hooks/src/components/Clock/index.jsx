import './index.css'
import React, {useEffect} from 'react'
import {useState} from 'react'
// import React from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timerId)
      console.log('Cleanup Function executed')
    }
  }, [])

  return (
    <div className="clock-container">
      <h1 className="heading">Clock</h1>
      <img
        className="clock-image"
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <p className="time">{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
