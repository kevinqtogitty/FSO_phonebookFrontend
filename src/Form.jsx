import axios from "axios";
import React from "react";
import { useState } from "react";
import phonebookServices from "../src/services/phonebookServices.jsx"

const Form = ({persons, setPersons, setDisplayMessage}) => {
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
          number: newNumber,
          id: persons.length + 1
        }

        phonebookServices
          .create(newPersonObject)
          .then(response => {
            setPersons(persons.concat(newPersonObject))
            setNewName('')
            setNewNumber('')
          })
          .then(setDisplayMessage(`${newPersonObject.name} has been added to your phonebook`))
          setTimeout(() => {
            setDisplayMessage(null)
          }, 5000)        
      }

    const handleNewNameTyping = (e) => {
        setNewName(e.target.value)
      }
    
    const handleNewNumberTyping = (e) => {
        setNewNumber(e.target.value)
      }

    return(
        <form onSubmit={createNewPerson}>
            <div>name: <input value={newName} onChange={handleNewNameTyping}/></div>
            <div>number: <input value={newNumber} onChange={handleNewNumberTyping}/></div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
    )
}

export default Form