import { useState } from 'react'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  console.log(persons)
  const createNewPerson = (e) => {
    e.preventDefault()
    if (persons.find(name => name.name === newName)) {
      alert(`${newName} has already been added to the phonebook`)
      return
    }
    const newPersonObject = {
      name: newName,
      id: newName,
      phoneNumber: null
    }

    setPersons(persons.concat(newPersonObject))
    setNewName('')
  }

  const handleNewNameTyping = (e) => {
    setNewName(e.target.value)
  }

  const showPersons = persons.map(person => person.name)
  console.log(showPersons)


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={createNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameTyping}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {showPersons.map(person => <Persons key={person} persons={person}/>)}
      </ul>
    </div>
  )
}

export default App
