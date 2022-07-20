import React from "react";
import { useState } from "react";

import PhonebookList from "./PhonebookList";

const Search = ({persons}) => {
    const [searchName, setSearchName] = useState('')

    const searchResults = persons.filter(person => person.name.toLowerCase() === searchName)

    const handleSearchName = (e) => {
        setSearchName(e.target.value)
    }

    return (
      <div>
        <input value={searchName} onChange={handleSearchName}/>
        <button type='submit'>Search</button>
        <ul>
          <PhonebookList persons={searchResults} />
        </ul>
      </div>
    )
}

export default Search