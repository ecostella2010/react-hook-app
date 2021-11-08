import React, { useContext } from 'react'
import { UseContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext ( UseContext );

    return (
        <div>
            <h1>AboutScreen</h1>
            <hr/>

            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                className="btn btn-warning"
                onClick = { () => setUser ({}) }
            >
                Logout
            </button>


        </div>
    )
}
