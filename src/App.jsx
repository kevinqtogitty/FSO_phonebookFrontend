import { useState, useEffect } from 'react'
import Form from './Form'
import PhonebookList from './PhonebookList'
import Search from './Search'
import axios from 'axios'
import phonebookServices from "../src/services/phonebookServices.jsx"
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])  
  const [actionMessage, setDisplayMessage] = useState(null)

  useEffect(() => {
    phonebookServices
      .getAll()
      .then(intialPhonebook => setPersons(intialPhonebook))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification actionMessage={actionMessage} />
      <Search persons={persons}/>
      <h2>Add someones number to your phonebook!</h2>
      <Form persons={persons} setDisplayMessage={setDisplayMessage} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <PhonebookList persons={persons} />
    </div>
  )
}

export default App
