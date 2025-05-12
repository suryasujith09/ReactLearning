import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'
import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

const App = () => {
  const [contactsList, setContactsList] = useState(initialContactsList)
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState('')

  const toggleIsFavorite = id => {
    setContactsList(prevContactsList => {
      return prevContactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      })
    })
  }

  const onAddContact = event => {
    event.preventDefault()
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    }
    setContactsList(prevContactsList => [...prevContactsList, newContact])
    setName('')
    setMobileNo('')
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
            <ContactItem
              key={eachContact.id}
              contactDetails={eachContact}
              toggleIsFavorite={toggleIsFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
