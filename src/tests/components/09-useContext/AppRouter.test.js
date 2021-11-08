import { mount } from "enzyme";
import React from "react";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { UseContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <AppRouter />', () => {
    
    const user = {
        id: 1234,
        name: 'Eduardo Costella',
        email: 'ecostella@hotmail.com'
    };

    const wrapper = mount(
    
        <UseContext.Provider value = {{
            user
        }}>

            <AppRouter />

        </UseContext.Provider>
        
    );

    test('debe de mostrarse correctamente', () => {
        
        expect ( wrapper ).toMatchSnapshot ();

    });
    

})
