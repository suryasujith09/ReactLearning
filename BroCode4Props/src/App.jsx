import Student from './Student.jsx'

function App() {
  return (
    <>
      <h1>Bro Code 4 Props</h1>
      <Student
        name="Surya"
        age={18}
        email="hackersurya09@gmail.com"
        isStudent="True"
      />
      <Student
        name="Tanu"
        age={15}
        email="mettatanujith@gamil.com "
        isStudent={false}
      />
      <Student name="Varun" />
    </>
  )
}

export default App
