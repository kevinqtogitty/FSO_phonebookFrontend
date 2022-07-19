import { useState } from 'react'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const createNewPerson = (e) => {
    e.preventDefault()
    if (persons.find(name => name.name === newName)) {
      alert(`${newName} has already been added to the phonebook`)
      return
    }

    const newPersonObject = {
      name: newName,
      phoneNumber: newNumber,
      id: persons.length + 1
    }

    setPersons(persons.concat(newPersonObject))
    setNewName('')
  }

  const handleNewNameTyping = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumberTyping = (e) => {
    setNewNumber(e.target.value)
  }

  const showPersons = persons.map(person => person)
  

  return (
    <div>
      <h2>Phonebook</h2>
        <div>Search: <input/></div>
      <h2>Add someones number to your phonebook!</h2>
      <form onSubmit={createNewPerson}>
        <div>name: <input value={newName} onChange={handleNewNameTyping}/></div>
        <div>number: <input value={newNumber} onChange={handleNewNumberTyping}/></div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {showPersons.map(person => <Persons key={person.id} persons={person.name} number={person.phoneNumber}/>)}
      </ul>
    </div>
  )
}

export default App
