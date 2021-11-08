import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ( { handleAddTodo } ) => {


    // p1 Desestructuro
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1) {
            return;
        }

        //p3 description
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        //dispatch( action );
        handleAddTodo( newTodo );
        //Para resetear valor del texto
        reset ();
        
    }    

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit= { handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender ..."
                    autoComplete="off" 
                    // p2 agrego value description
                    value = { description }
                    onChange={ handleInputChange }
                />
                {/* btn-block is depreciated in bootstrap 5.0.x, you must to use w-100 or col-12 */}
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-2 w-100"
                >
                    Agregar    
                </button>    

            </form>
            
        </>
    )
}
