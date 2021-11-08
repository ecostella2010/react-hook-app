import React from 'react'; 
import { useForm } from "../../hooks/useForm";
import { renderHook, act } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com'
    }
    
    test('debe de regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm (initialForm));
        //console.log ( result.current );
        const [ values, handleInputChange, reset ] = result.current;
        //console.log ( values );
        //console.log ( handleInputChange );
        expect (values).toEqual ( initialForm );
        expect (values.name).toBe ( initialForm.name );
        expect (typeof handleInputChange).toBe ( 'function' );
        expect (typeof reset).toBe ( 'function' );
    });

    test('debe de cambiar el valor de formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm (initialForm));
        const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange ( {
                target: {
                    name : 'name',
                    value: 'Melissa'
                }
            });
        });

        const [ values ] = result.current;
        
        //console.log( values );
        expect (values.name).toBe ('Melissa');
        expect (values).toEqual ({ ...initialForm, name: 'Melissa' });
    });

    test('debe de reestablecer el formulario con reset', () => {
        const { result } = renderHook( () => useForm (initialForm));
        const [ ,handleInputChange, reset ] = result.current;

        act( () => {
            handleInputChange ( {
                target: {
                    name : 'name',
                    value: 'Melissa'
                }
            });

            reset();
        });

        const [ values ] = result.current;

        expect ( values ).toEqual ( initialForm );
        //expect ( values.name ).toBe ( initialForm.name );
        
    });
    
})
