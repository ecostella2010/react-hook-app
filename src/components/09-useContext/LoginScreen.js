import React, { useContext } from 'react'
import { UseContext } from './UserContext';

export const LoginScreen = () => {

    //1.- Obtener las referencias al userContext
    const { setUser } = useContext ( UseContext );
    //2.- Extraer el setUser de ese context

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick ={ () => setUser( 
                    {
                        id: 1234,
                        name: 'Eduardo Costella',
                        email: 'ecostella@hotmail.com'
                    }
                 )}
            >
                Login
            </button>
        </div>
    )
}
