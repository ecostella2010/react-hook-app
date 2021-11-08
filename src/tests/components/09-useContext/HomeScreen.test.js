
import React from "react";
import { mount } from "enzyme"
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UseContext } from "../../../components/09-useContext/UserContext";



describe('Pruebas en <HomeScreen/>', () => {
    const user = {
        id: 1234,
        name: 'Eduardo Costella',
        email: 'ecostella@hotmail.com'
    }
    
    //El shallow solo renderizará el primer componente, por lo que debemos usar mount
    const wrapper = mount (
        <UseContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UseContext.Provider> 
    
    );

    test('debe de mostrarse correctamente', () => {
        
        expect ( wrapper ).toMatchSnapshot ();
    });
    
})
