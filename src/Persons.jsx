import React from "react";
import axios from "axios";
import phonebookServices from "./services/phonebookServices";
import Delete from "./Delete.jsx"

const Persons = ({person, id, number}) => {

    return (
        <div>
            <li id={id}>{person}: {number} 
            <button onClick={() => Delete.confirm(id)}>delete</button></li>
        </div>
    )   
}

export default Persons