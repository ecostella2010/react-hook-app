import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UseContext } from './UserContext'


export const MainApp = () => {
    // const user = {
    //     id: 1234,
    //     name: 'Eduardo Costella',
    //     email: 'ecostella@hotmail.com'
    // }

    const [user, setUser] = useState({});

    return (
        <UseContext.Provider value = { {
            user, 
            setUser
        }}>
            <AppRouter />
        </UseContext.Provider>
    ) 
}
