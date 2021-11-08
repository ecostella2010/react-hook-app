import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd/>', () => {
    
    const handleAddTodo = jest.fn();

    const wrapper = shallow (
        <TodoAdd 
           handleAddTodo = { handleAddTodo }  
        />   
   );

    test('debe de mostrarse correctamente', () => {
        
        expect ( wrapper ).toMatchSnapshot();
    });

   test('no debe llamar al handleAddTodo', () => {
       //Una alternativa para simulate es:
       const formSubmit = wrapper.find('form').prop('onSubmit');
       
       console.log( formSubmit );
    
       formSubmit({ preventDefault(){} });

       expect ( handleAddTodo ).toHaveBeenCalledTimes ( 0 );
       
   });

   test('debe de llamar la function handleAddTodo', () => {
        // con un argumento
        const value = 'Aprender React';

        wrapper.find('input').simulate ('change', {
            target: {
                value,
                name: 'description'
            }
        });

        //Una alternativa para simulate es:
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({ preventDefault(){} });

        expect ( handleAddTodo ).toHaveBeenCalledTimes ( 1 );
        expect ( handleAddTodo ).toHaveBeenCalledWith ( expect.any(Object) );
        expect ( handleAddTodo ).toHaveBeenCalledWith ( {
            id: expect.any(Number), //Solo valida que se un numero
            desc: value, //Valida que se igual 
            done: false //Valida que se igual 
        });

        expect ( wrapper.find ('input').prop('value')  ).toBe('');

   })
   
   
    
})
