import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    //const state = useFetch (`https://www.breakingbadapi.com/api/quotes/1`);
    const { data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    //console.log ( data );

    //const loading = true;

    const { quote } = !!data && data[0];

    //console.log(author, quote);

    const pTag = useRef("");
    const [ boxSize, setBoxSize] = useState ({});

    useLayoutEffect(() => {
        //Nos sirve para poder sacar mediciones de anchura o otra medición despues que hay cambiado o se haya renderizado
        //    console.log( ' hey ' );
       // console.log( pTag.current.getBoundingClientRect() );
       setBoxSize (pTag.current.getBoundingClientRect());

    }, [ quote ])

    return (
        <div>
            <h1>Layout</h1>
            <hr/>
    
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref = { pTag }
                > 
                    { quote } 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick= { increment } 
            >
                Siguiente quote
            </button>

            
        </div>
    )
}
