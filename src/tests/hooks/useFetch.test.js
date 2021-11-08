import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";


describe('Pruebas en useFetch', () => {
        
    beforeEach ( () => {
       jest.clearAllMocks();
    });

    test('debe de retornar la informacion por defecto o sea state', () => {
        
        //const { data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${ counter }`);

        const { result } = renderHook ( () => useFetch('https://www.breakingbadapi.com/api/quotes/2'));

        const { data, loading, error } =  result.current;

        expect ( data ).toBe ( null );
        expect ( loading ).toBe ( true );
        expect ( error ).toBe ( null );

    });
    
    test('debe de tener la informacion deseada', async() => {
        
        const { result, waitForNextUpdate } = renderHook ( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        await waitForNextUpdate();
        const { data, loading, error } =  result.current;

        expect ( data.length ).toBe (1);
        expect ( loading ).toBe ( false );
        expect ( error ).toBe ( null );
    });

    test('debe de manejar el error', async() => {
        
        const { result, waitForNextUpdate } = renderHook ( () => useFetch('https://reqres.in/apiXXX/users?page=2'));
        await waitForNextUpdate();
        const { data, loading, error } =  result.current;

        expect ( data ).toBe ( null );
        expect ( loading ).toBe ( false );
        expect ( error ).not.toBe ( null );
        expect ( error ).toBe ( 'No se pudo carga la info' );
    });
    
})
