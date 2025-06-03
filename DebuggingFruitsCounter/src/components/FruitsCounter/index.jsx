import {useState} from 'react'
import './index.css'

const FruitsCounter = () => {
  const [mangoesCount, setMangoesCount] = useState(0)
  const [bananasCount, setBananasCount] = useState(0)

  const onClickEatBanana = () => {
    setBananasCount(prevCount => prevCount + 1)
  }

  const onClickEatMango = () => {
    setMangoesCount(prevCount => prevCount + 1)
  }

  return (
    <div className="fruits-counter-container">
      <div className="fruits-counter">
        <h1 className="count-text">
          Bob ate <span className="count">{mangoesCount}</span> mangoes
          <span className="count"> {bananasCount}</span> bananas
        </h1>
        <div className="counters-control-container">
          <div className="counter-control">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="fruit-image"
            />
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={onClickEatMango}
              >
                Eat Mango
              </button>
            </div>
          </div>
          <div className="counter-control">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruit-image"
            />
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={onClickEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FruitsCounter
