import React from "react";
import { useState } from "react";

import PhonebookList from "./PhonebookList";

const Search = ({persons}) => {
    const [searchName, setSearchName] = useState('')

    const handleSearchName = (e) => {
        setSearchName(e.target.value)
    }

    const searchResults = persons.filter(person => {
      if (searchName == ''){
        return
      }
      else if (person.name.toLowerCase().includes(searchName.toLowerCase())) {
        return person
      }
    })

    return (
      <div>
        <p>Filter with the name: <input value={searchName} onChange={handleSearchName}/></p>
        <ul>
          <PhonebookList persons={searchResults} />
        </ul>
      </div>
    )
}

export default Search