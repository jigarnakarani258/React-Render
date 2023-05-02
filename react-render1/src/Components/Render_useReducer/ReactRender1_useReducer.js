import React, { useReducer } from 'react';

const initialValue = 0 ;
const reducer = (state , action) => {
    switch (action.type) {
        case 'Increment':
            return state + 1 ;
        case 'Decrement':
            return state - 1 ;
        case 'Reset':
            return initialValue ;
        default:
            return state ;
    }
}

function ReactRender1_useReducer() {

    const [state , dispatch] = useReducer( reducer , initialValue) ;

    console.log('Rendering useReducer component');
    return(
        <div>
            <h2> Count Value Rendering Event :- {state} </h2>
            <button onClick={ () => dispatch({type: 'Increment'}) }> Increment By 1 </button>
            <button onClick={ () => dispatch({type: 'Decrement'}) }> Decrement By 1 </button>
            <button onClick={ () => dispatch({type: 'Reset'}) }> Reset </button>
        </div>
    )
}

export default ReactRender1_useReducer;