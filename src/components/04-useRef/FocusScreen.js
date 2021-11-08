import React, { useRef } from 'react'
import './effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    //console.log( ref );

    const handleClick = () => {

        //document.querySelector('input').focus();

        //Pone el focus y ademas selecciona el texto
        document.querySelector('input').select();

        //Haciendo uso ahora del la usdRef 
        inputRef.current.select();
        console.log ( inputRef );
    }

    return (
        <div>
            <h1> Focus Screen </h1>
            <hr/>

            <input
                ref = { inputRef } 
                className="form-control"
                placeholder="Su nombre"
            />

            <button 
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }  
                >
                Focus
            </button>

            
           
            
        </div>
    )
}
