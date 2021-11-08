import { mount } from "enzyme";
import React from "react";
import { act } from "@testing-library/react";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UseContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <LoginScreen/>', () => {
    
    const setUser = jest.fn();

    const user = {
        id: 1234,
        name: 'Eduardo Costella',
        email: 'ecostella@hotmail.com'
    };

    const wrapper = mount ( 
        <UseContext.Provider value={{
            setUser
        }} >  
            <LoginScreen 
            />
        </UseContext.Provider>    
    );


    test('debe de mostrarse correctamente', () => {
        expect ( wrapper ).toMatchSnapshot ();
    });
    
    test('debe de ejecutar el setUser con el argumento esperado', () => {
        
        act( () => {
            wrapper.find('button').prop('onClick')();
        });

        expect ( setUser ).toHaveBeenCalledWith (user);

    });


})
