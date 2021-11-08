import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import './memos.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter ( counter  + 1 );
    // }

    
    //Primer Caso de Uso de useCallback
    const increment = useCallback(
        ( factor ) => {
            setCounter ( c => c + factor );
        },
        [ setCounter ],
    )
    
    //Segundo Caso de Uso de useCallback
    useEffect(() => {
        //?????? - Si no esta el efecto se gatillaría cada vez que renderice o se vuelva a construir esa function 
    }, [increment])


    return (
        <div>
            <h1>useCallback Hook: { counter } </h1>
            <hr/>

            <ShowIncrement increment = {increment}/>

        </div>
    )
}
