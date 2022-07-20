import React from "react";
import { useState } from "react";

const Search = ({persons}) => {
    const [searchName, setSearchName] = useState('')
    const searchResults = persons.filter(person => persons.name === searchName)

    const handleSearchName = () => {
        setSearchName(e.target.value)
    }

    return (
      <div>
        <input value={searchName} onChange={handleSearchName}/>
        <button type='submit'>Search</button>
      </div>
    )
}

export default Search