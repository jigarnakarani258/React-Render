import React, { useState } from 'react';

const initialArray = [ 'Jigar' , 'Bhavik' ]

function Array_useState() {

    const [personList , setPersonList] = useState(initialArray) ;
    let newPersonList = [...personList]
    const onClickHandler = () => {
        newPersonList.push("DJ")
        setPersonList(newPersonList)
    }

    console.log('Rendering Array as a state in useState Hook component');
    return(
        <div>
            <button onClick={ () => onClickHandler()}>  Add new person </button>
            {
                personList.map( person => {
                    return <h3 key={person}> {person} </h3>
                })
            }
        </div>
    )
}

export default Array_useState;