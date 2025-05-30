import './index.css'
import {useEffect, useState} from 'react'
import LeaderboardRow from '../LeaderboardRow'
import BeatLoader from 'react-spinners/BeatLoader'

const Leaderboard = () => {
  const [leaderboardData, setleaderboardData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const getLeaderboardData = async () => {
      const url = 'https://apis2.ccbp.in/leaderboard-v2'
      const response = await fetch(url)
      const responseData = await response.json()
      const formattedData = responseData.leaderboard_data.map(eachUser => ({
        id: eachUser.id,
        rank: eachUser.rank,
        name: eachUser.name,
        profileImgUrl: eachUser.profile_image_url,
        score: eachUser.score,
        language: eachUser.language,
        timeSpent: eachUser.time_spent,
      }))
      setleaderboardData(formattedData)
      setIsLoading(false)
    }
    getLeaderboardData()
  }, [])
  const renderLeaderboardHeader = () => (
    <li className="leaderboard-header">
      <p className="table-heading rank">Rank</p>
      <p className="table-heading name">Name</p>
      <p className="table-heading score">Score</p>
      <p className="table-heading language">Language</p>
      <p className="table-heading time-spent">Time Spent</p>
    </li>
  )

  const renderLeaderboard = () => (
    <ul className="leaderboard-table-container">
      {renderLeaderboardHeader()}
      {leaderboardData.map(eachUser => (
        <LeaderboardRow key={eachUser.id} userDetails={eachUser} />
      ))}
    </ul>
  )
  const renderLoader = () => (
    <div className="loading-view-container">
      <BeatLoader color="#ffffff" />
    </div>
  )

  return (
    <div className="leaderboard-container">
      {isLoading ? renderLoader() : renderLeaderboard()}
    </div>
  )
}

export default Leaderboard
