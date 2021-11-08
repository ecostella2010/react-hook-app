import React, { useEffect, useReducer } from 'react'

import { todoReducer } from './todoReducer';
// import { useForm } from '../../hooks/useForm';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () =>{
    //Si retorna null entonces retorna []
    return JSON.parse(localStorage.getItem ('toDos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];


}

export const TodoApp = () => {

    //const [ toDos, dispatch ] = useReducer(todoReducer, initialState);
    const [ toDos, dispatch ] = useReducer(todoReducer, [], init);

    // const [ formValues, handleInputChange ] = useForm({
    //     description: ''
    // });

    // // p1 Desestructuro  -- Se lleva a TodoAdd
    // const [ { description }, handleInputChange, reset ] = useForm({
    //     description: ''
    // });

    useEffect(() => {

        //Si los toDos cambian debo grabar en localStorage
        localStorage.setItem('toDos', JSON.stringify( toDos ));
   
    }, [toDos]);

    const handleDelete = ( todoId ) =>{
        console.log( todoId );

        // Crear la accion
        const action = {
            type: 'delete',
            payload: todoId
        } 

        //hacer el dispatch
        dispatch( action );
   
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch( {
            type: 'add',
            payload: newTodo
        });
    }

    const handleToggle = (todoId) => {
        
        //hacer el dispatch
        dispatch( {
            type: 'toggle',
            payload: todoId
        });
    }


    //console.log ( description );

    // const handleSubmit = (e) => {
    //     e.preventDefault(); //Para evitar el posteo
    //     //console.log( 'Nueva Tarea' );


    //     if ( description.trim().length <= 1) {
    //         return;
    //     }
    //     // const newTodo = {
    //     //     id: new Date().getTime(),
    //     //     desc: 'Nueva tarea',
    //     //     done: false
    //     // };

    //     //p3 description
    //     const newTodo = {
    //         id: new Date().getTime(),
    //         desc: description,
    //         done: false
    //     };

    //     const action = {
    //         type: 'add',
    //         payload: newTodo
    //     }

    //     dispatch( action );
    //     //Para resetear valor del texto
    //     reset ();

    // }


    return (
        <div>

           
            <h1>TodoApp ({ toDos.length })  </h1>
            <hr/>
            <div className = "row">
                <div className ="col-7">
                    {/* TodoList, toDos, handleDelete, handleToggle */}
                    <TodoList 
                        toDos = { toDos } 
                        handleDelete = { handleDelete } 
                        handleToggle = { handleToggle } 
                    /> 
                    {/* <ul className="list-group list-group-flush">
                    {
                        toDos.map( (todo, i)  => (
                            // TodoListItem, todo, index, handleDelete, handleToggle
                            <li
                                key= { todo.id }
                                className = "list-group-item"
                            >   
                                <p 
                                    className= { `${ todo.done && 'complete' } `}
                                    onClick = { () => { handleToggle (todo.id);}}
                                > 
                                    {i + 1}. { todo.desc } 
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick = { () => { handleDelete (todo.id); } } 
                                >
                                    Borrar
                                </button>
                            </li>
                        ))
                     }    
                       {/* 
                        <li>Hola</li>
                        <li>Mundo</li>
                        <li>Hola de nuevo</li>  }
                    </ul> */}
                </div>

                <div className= "col-5">
                    <TodoAdd 
                        handleAddTodo = { handleAddTodo }
                    />
                    {/* <h4>Agregar TODO</h4>
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
                        { 
                        // btn-block is depreciated in bootstrap 5.0.x, you must to use w-100 or col-12 
                        }
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-2 w-100"
                        >
                            Agregar    
                        </button>    

                    </form> */}
                </div>

            </div>

            
        </div>
    )
}
