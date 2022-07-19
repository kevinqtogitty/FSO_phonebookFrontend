import React from "react";

const Persons = ({persons, key}) => {
    return (
        <p key={key}>{persons}</p>
    )
}

export default Persons