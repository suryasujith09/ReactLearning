import PropTypes from 'prop-types'

function UserGreeting(props) {
  // const welcomeMessage = (
  //   <h1 className="welcome-message">Welcome back, {props.userName}!</h1>
  // )
  // const loginPrompt = <h1 className="login-prompt">Please sign in.</h1>
  // const greeting = props.isLoggedIn ? welcomeMessage : loginPrompt
  // return (
  //   <div>
  //     {greeting}
  //     <h2 className="greeting">Hello, {props.userName}!</h2>
  //   </div>
  // )
  if (props.isLoggedIn) {
    return <h1 className="welcome-message">Welcome back, {props.userName}!</h1>
  }
  return <h1 className="login-promt">Please sign in.</h1>
}
export default UserGreeting
