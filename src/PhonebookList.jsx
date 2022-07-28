import React from "react";
import { UseState } from "react";

import Persons from "./Persons";


const PhonebookList = ({persons}) => {
    const showPersons = persons.map(person => person)
    return (
    <ul>
        {showPersons.map(person => <Persons id={person.id} person={person.name} number={person.number} />)}
    </ul>
    )
}

export default PhonebookList