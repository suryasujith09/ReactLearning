import profilePic from './Assets/mirrorselfi1.jpg'
function Card() {
  return (
    <div className="card">
      <img className="profilePic" src={profilePic} alt="Profile Picture"></img>
      <h2 className="card-title">Surya</h2>
      <p className="card-text">I am not just a codder,I am born to learn.</p>
    </div>
  )
}

export default Card
