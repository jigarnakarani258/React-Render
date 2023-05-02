import React, { useState } from 'react';

const initialObject = {
    firstname : 'Jigar',
    lastname : 'nakarani'
}

function Object_useState() {

    const [person , setPerson] = useState(initialObject) ;
    const onClickHandler = () => {
        const newPerson = {...person}
        newPerson.firstname = 'Jigs'
        newPerson.lastname = 'patel'
        setPerson(newPerson)
    }

    console.log('Rendering object as a state in useState Hook component');
    return(
        <div>
            <button onClick={ () => onClickHandler()}> Person name change </button>
            <h3> {person.firstname} - {person.lastname} </h3>
        </div>
    )
}

export default Object_useState;