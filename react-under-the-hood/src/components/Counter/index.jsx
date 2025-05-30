import {useState} from 'react'

import './index.css'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const onDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="container">
      <p className="heading">Count {count}</p>
      <div>
        <button className="button" type="button" onClick={onIncrement}>
          Increase
        </button>
        <button className="button" type="button" onClick={onDecrement}>
          Decrease
        </button>
      </div>
    </div>
  )
}

export default Counter
