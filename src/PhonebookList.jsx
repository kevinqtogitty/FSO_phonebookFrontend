import React from "react";
import { UseState } from "react";

import Persons from "./Persons";


const PhonebookList = ({persons}) => {
    const showPersons = persons.map(person => person)

    return (
    <ul>
        {showPersons.map(person => <Persons key={person.id} persons={person.name} number={person.number}/>)}
    </ul>
    )
}

export default PhonebookList