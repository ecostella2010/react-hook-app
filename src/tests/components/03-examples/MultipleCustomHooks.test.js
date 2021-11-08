import React from 'react'; 

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks />', () => {
    
    beforeEach ( () => {
        jest.clearAllMocks();
        useCounter.mockReturnValue(
            {
            counter: 1,
            increment: () => {
                return null;
            }
        })
    });

    test('debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow ( <MultipleCustomHooks />);
        expect (wrapper).toMatchSnapshot();
    });

    test('debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow ( < MultipleCustomHooks />);
        //expect (wrapper).toMatchSnapshot();

        //Si quiero buscar por clase seria
        expect ( wrapper.find('.alert').exists() ).toBe ( false ); //Es false por que se cargó y el loading no se muestra!!
        expect ( wrapper.find('.mb-0').text().trim() ).toBe ( 'Hola Mundo' );
        //Como es una etiqueta no hacen falta .
        expect ( wrapper.find('footer').text().trim() ).toBe ( 'Fernando' );

    });
    
    
})
