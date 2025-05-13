import PropTypes from 'prop-types'
function Student(props) {
  return (
    <div className="student">
      <h2>Student</h2>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Email:{props.email}</p>
      <p>Istudent:{props.isStudent ? 'Yes' : 'No'}</p>
    </div>
  )
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string,
  isStudent: PropTypes.bool,
}
Student.defaultProps = {
  name: 'Guest',
  age: 0,
  email: 'No email provided',
  isStudent: false,
}
export default Student
