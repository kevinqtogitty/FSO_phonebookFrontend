import React from "react";

const Persons = ({persons, key, number}) => {
    return (
        <p key={key}>{persons}: {number}</p>
    )
}

export default Persons