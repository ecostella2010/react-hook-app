import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( {toDos, handleDelete, handleToggle }) => {
    /* TodoList, toDos, handleDelete, handleToggle */
    return (
            <ul className="list-group list-group-flush">
            {
                toDos.map( (todo, i)  => (
                    // TodoListItem, todo, index, handleDelete, handleToggle
                    
                    <TodoListItem 
                            key = { todo.id } 
                            todo = { todo } 
                            index = { i } 
                            handleDelete = { handleDelete }
                            handleToggle = { handleToggle }
                    />

                    // <li
                    //     key= { todo.id }
                    //     className = "list-group-item"
                    // >   
                    //     <p 
                    //         className= { `${ todo.done && 'complete' } `}
                    //         onClick = { () => { handleToggle (todo.id);}}
                    //     > 
                    //         {i + 1}. { todo.desc } 
                    //     </p>
                    //     <button
                    //         className="btn btn-danger"
                    //         onClick = { () => { handleDelete (todo.id); } } 
                    //     >
                    //         Borrar
                    //     </button>
                    // </li>
                ))
            }    
            {/* <li>Hola</li>
            <li>Mundo</li>
            <li>Hola de nuevo</li> */}
        </ul>
        
    )
}
