import UserGreeting from './UserGreeting.jsx'
function App() {
  return (
    <>
      <h1>Conditional Rendering</h1>
      <UserGreeting isLoggedIn={false} userName="Surya" />
    </>
  )
}

export default App
