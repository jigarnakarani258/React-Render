import React, { useState } from 'react';
import Child_Component from './Child_Component';

function Parent_Component() {

    const [count , setCount] = useState(0) ;

    console.log('Rendering Parent component');
    return(
        <div>
            <h2> Count Value Rendering Event :- {count} </h2>
            <button onClick={ () => setCount(prevState => prevState + 1)}> Increment By 1</button>
            <button onClick={ () => setCount(0)}> Set count value 0</button>
            <button onClick={ () => setCount(5)}> Set count value 5 by only once</button>
            <Child_Component/>
        </div>
    )
}

export default Parent_Component;