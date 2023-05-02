import React, { useState } from 'react';

function ReactRender1_useState() {

    const [count , setCount] = useState(0) ;

    console.log('Rendering useState component');
    return(
        <div>
            <h2> Count Value Rendering Event :- {count} </h2>
            <button onClick={ () => setCount(prevState => prevState + 1)}> Increment By 1</button>
            <button onClick={ () => setCount(0)}> Set count value 0</button>
            <button onClick={ () => setCount(5)}> Set count value 5 by only once</button>
        </div>
    )
}

export default ReactRender1_useState;