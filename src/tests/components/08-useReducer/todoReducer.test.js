import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos";

// const demoTodos = [{
//     id: 1,
//     desc: 'Aprender React',
//     done: false
// },
// {
//     id: 2,
//     desc: 'Aprender Mongo',
//     done: false
// }];

describe('Prubeas en todoReducer', () => {

    beforeEach ( () => {
        jest.clearAllMocks();
    });

    
    test('debe de retornar el estado por defecto', () => {
       
        const state = todoReducer( demoTodos, {});

        expect( state ).toEqual( demoTodos );

    });


    test('debe de agregar un TODO', () => {
       
        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer( demoTodos, action);
        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [...demoTodos, newTodo] );
        //console.log(state);
        // const state = todoReducer( demoTodos, {
        //     type: 'add',
        //     payload: {
        //             id: 3,
        //             desc: 'Aprender Node',
        //             done: false
        //         }
        // });

        // console.log(state);

        // const handleAddTodo = ( newTodo ) => {
        //     dispatch( {
        //         type: 'add',
        //         payload: newTodo
        //     });

        // expect( state.length ).toBe( 3 );

    });

    test('debe de borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };

        //action.payload = ID del TODO
        const state = todoReducer( demoTodos, action);
        //console.log(state);
        expect( state.length ).toBe( 1 );
        const [ data ] = state;
        expect( data.id ).toBe( 2 );
        expect( state[0].id ).toBe( 2 );
        expect( state ).toEqual( [demoTodos[1]] );

    });

    test('debe de hacer el TOGLLE del TODO', () => {

        const action = {
            type: 'toggle',
            payload: 1
        };

        const state = todoReducer( demoTodos, action);
        expect( state[0].done ).toBe( true );
        expect( state[1].done ).toBe( false );
        expect( state[1] ).toBe( demoTodos[1] );
        
    });
    
    
    
})
