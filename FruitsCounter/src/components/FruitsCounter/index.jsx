import {useState} from 'react'

const fruits = () => {
  const [mangoCount, setMangoCount] = useState(0)
  const [bananaCount, setBananaCount] = useState(0)
  const mangoCountUp = () => {
    setMangoCount(prevCount => prevCount + 1)
  }
  const bananaCountUp = () => {
    setBananaCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <h1 className="heading">Fruits Counter</h1>
      <div className="fruit-container">
        <div className="fruit">
          <h2>Mangoes</h2>
          <p className="count">{mangoCount}</p>
          <button className="button" onClick={mangoCountUp}>
            Increase Mango Count
          </button>
        </div>
        <div className="fruit">
          <h2>Bananas</h2>
          <p className="count">{bananaCount}</p>
          <button className="button" onClick={bananaCountUp}>
            Increase Banana Count
          </button>
        </div>
      </div>
      <div className="total-count">
        <h2>Total Fruits Count: {mangoCount + bananaCount}</h2>
      </div>
    </div>
  )
}
