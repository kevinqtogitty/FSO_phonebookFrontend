import { useState, useEffect } from 'react'
import Form from './Form'
import PhonebookList from './PhonebookList'
import Search from './Search'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])  

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Search persons={persons}/>
      <h2>Add someones number to your phonebook!</h2>
      <Form persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <PhonebookList persons={persons}/>
    </div>
  )
}

export default App
