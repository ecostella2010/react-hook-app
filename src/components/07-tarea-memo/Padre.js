import React, { useCallback, useEffect, useState }  from 'react';
import { Hijo } from './Hijo';

import './memos.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num );
    // }

    //Primer Caso de Uso de useCallback
    const incrementar = useCallback(
        ( num ) => {
            setValor ( c => c + num );
        },
        [ setValor ],
    )
    
    // useEffect(() => {
    //     //?????? - Si no esta el efecto se gatillaría cada vez que renderice o se vuelva a construir esa function 
    // }, [incrementar]);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
