import React from 'react'; 
import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en useCounter', () => {
    
    // let wrapper = shallow ( < useCounter />);
    
    // beforeEach ( () => {
    //     wrapper = shallow ( < useCounter /> );
    // });

    test('debe de retornar valores por defectos', () => {

        const { result } = renderHook( () => useCounter ());
        //console.log ( result.current );

        expect (result.current.counter).toBe (10);
        expect (typeof result.current.increment).toBe ('function');
        expect (typeof result.current.decrement).toBe ('function');
        expect (typeof result.current.reset).toBe ('function');

    });
    
    test('debe de tener el counter en 100', () => {

        const { result } = renderHook( () => useCounter (100));
        //console.log ( result.current );

        expect (result.current.counter).toBe (100);
    
    });

    test('debe de incrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter (100));
        const { increment } = result.current;
        //console.log ( result.current );
        act( () => {
            increment ();
        });
        const { counter } = result.current;
        //console.log ( counter );
        expect (counter).toBe (101);
     });

     test('debe de decrementar el counter en 1', () => {

        const { result } = renderHook( () => useCounter (100));
        const { decrement } = result.current;
        //console.log ( result.current );
        act( () => {
            decrement ();
        });
        const { counter } = result.current;
        //console.log ( counter );
        expect (counter).toBe (99);
     });


     test('debe de resetaer el counter', () => {

        const { result } = renderHook( () => useCounter (100));
        const { decrement, reset } = result.current;
        //console.log ( result.current );
        act( () => {
            decrement ();
            reset ();
        });
        const { counter } = result.current;
        //console.log ( counter );
        expect (counter).toBe (100);
     });

});
