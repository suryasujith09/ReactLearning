import './index.css'

const Clock = () => (
  <div className="clock-container">
    <h1 className="heading">Clock</h1>
    <img
      className="clock-image"
      src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
      alt="clock"
    />
    <p className="time">10:00 AM</p>
  </div>
)

export default Clock
