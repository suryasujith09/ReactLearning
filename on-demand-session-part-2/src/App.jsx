import {useState} from 'react'

import ContactItem from './components/ContactItem'
import './App.css'

const initialContactsList = [
  {
    id: 1,
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: 3,
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

const App = () => {
  const [contactsList, setContactsList] = useState(initialContactsList)
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState('')

  const onAddContact = event => {
    event.preventDefault()
  }

  return (
    <div className="app-container">
      <div className="responsive-container">
        <h1 className="heading">Contacts</h1>
        <form className="contact-form-container" onSubmit={onAddContact}>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="input"
            placeholder="Name"
          />
          <input
            className="input"
            value={mobileNo}
            onChange={e => setMobileNo(e.target.value)}
            placeholder="Mobile Number"
          />
          <button type="submit" className="button">
            Add Contact
          </button>
        </form>
        <ul className="contacts-table">
          <li className="table-header">
            <p className="table-header-cell name-column">Name</p>
            <hr className="separator" />
            <p className="table-header-cell">Mobile Number</p>
          </li>
          {contactsList.map(eachContact => (
            <ContactItem key={eachContact.id} contactDetails={eachContact} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
