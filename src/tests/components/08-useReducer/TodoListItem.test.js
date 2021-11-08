import React from 'react'; 
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoListItem />', () => {

    //const setCategories = jest.fn();
    //expect ( setCategories ).not.toHaveBeenCalled();
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow ( <TodoListItem 
        todo = { demoTodos[0] } 
        index = { 0 }  
        handleDelete = { handleDelete } 
        handleToggle = { handleToggle }
        />);

    beforeEach ( () => {
        jest.clearAllMocks();
    });


    test('debe mostrarse correctamente', () => {
        //Snapshot
        expect (wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect ( handleDelete ).toHaveBeenCalledWith ( demoTodos[0].id );
    });

    test('debe de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect ( handleToggle ).toHaveBeenCalledWith ( demoTodos[0].id );
        
    });

    test('debe de mostrar el texto correctamente', () => {
        //contenido del parrafo
        const p = wrapper.find('p');
        //expect (p.text()).toBe ( {i + 1}. { todo.desc } );
        expect (p.text().trim()).toBe ( `1. ${ demoTodos[0].desc }` );
        
    });


    test('debe de tener la clase complete si el TODO.dome esta en true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow ( <TodoListItem 
            todo = { todo } 
            />);
        
            console.log( wrapper.html() );

            expect ( wrapper.find('p').hasClass('complete') ).toBe( true );
    });
    

})
