import React from "react";
import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos";

const handleDelete = jest.fn();
const handleToggle = jest.fn();

describe('Pruebas em <TodoList/>', () => {
    
    const wrapper = shallow ( 
        <TodoList 
            toDos = { demoTodos } 
            handleDelete = { handleDelete } 
            handleToggle = { handleToggle }
        /> 
    );

    test('debe de mostrarse correctamente', () => {
        
        expect ( wrapper ).toMatchSnapshot();
    
    });

    test('debe de tener dos elementos TodoListItems', () => {
        
        // console.log( wrapper.html() );
        // console.log( wrapper.find('TodoListItem').length );
        // console.log( wrapper.find('TodoListItem').at(0).props() );
        // console.log( wrapper.find('TodoListItem').at(0).prop('handleDelete') );
        // console.log( wrapper.find('TodoListItem').at(0).prop('handleToggle') );

        expect (wrapper.find('TodoListItem').length).toBe ( demoTodos.length );
        expect (wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual (expect.any(Function));
        expect (wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual (expect.any(Function));
        

    
    });


    

})
