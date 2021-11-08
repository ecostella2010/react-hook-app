import React, { useContext } from 'react'
import { UseContext } from './UserContext';

export const HomeScreen = () => {

    //const userContext = useContext ( UseContext );

    const { user } = useContext ( UseContext );

    console.log ( user );

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>
        </div>
    )
}
