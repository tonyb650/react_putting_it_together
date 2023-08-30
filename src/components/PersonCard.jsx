import React, { useState } from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;
    const [ personAge, setPersonAge ] = useState(age);
    return (
        <div className="person-card">
            <h2>{ lastName }, {firstName}</h2>
            <p>Age: {personAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ (event) => setPersonAge(personAge + 1) }>Birthday for {firstName}</button>
        </div>
    )
}

export default PersonCard;