import React from 'react'; 

import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en HookApp', () => {

    let wrapper = shallow ( < HookApp />);
    
    beforeEach ( () => {
        wrapper = shallow ( < HookApp /> );
    });

    test('debe mostrar  < HookApp /> correstamente', () => {
        expect (wrapper).toMatchSnapshot();
    });


})
