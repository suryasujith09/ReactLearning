import './index.css'

const Leaderboard = () => {
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
    <ul className="leaderboard-table-container">{renderLeaderboardHeader()}</ul>
  )

  return <div className="leaderboard-container"></div>
}

export default Leaderboard
