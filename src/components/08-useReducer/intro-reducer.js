
const initialState = [{
    id: 1,
    toDo: 'Comprar pan',
    done: false
}];

// Esto puede ser considerado un reducer, porque regresa un nuevo estado, siempre debemos de regresar un state aunque no se haga nada
const todoReducer = (state = initialState, action) => {

    if (action?.type === 'agregar'){
        return [ ...state, action.payload ]
    }
    return state;
}

let todos = todoReducer();

//Va a modificar el objeto y esto no lo vamos hacer porque cuando estemos con reduce relamente no nos va a funcionar
//todos.push()


const newTodo = [{
    id: 2,
    toDo: 'Comprar leche',
    done: false
}];

// solo newTodo estadar ES6, pero el payload es un standar para que otros dev cuando quieran trabajar con los argumentos ya saben que vienen en el payload 
const agregarTodoAction = {
    type: 'agregar',
    payload : newTodo
}

todos = todoReducer( todos, agregarTodoAction );

console.log( todos );