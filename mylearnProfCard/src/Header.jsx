import React from 'react'
import Photo from '/src/assets/photo.jpg'

const ProfileCard = () => {
  function buttonClick() {
    alert('A Great Thing Happened!')
  }

  return (
    <div className="card">
      <div className="imgc">
        <img src={Photo} alt="Profile" className="photo" />
      </div>
      <h2 className="name">METTA SURYA SUJITH</h2>
      <p className="idp">ID: N24H01A0390</p>
      <p className="php">Ph no: +91-8885492229</p>
      <button onClick={buttonClick}>Check Out</button>
    </div>
  )
}

export default ProfileCard
