import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''

    });

    const {name, email} = formState;

    useEffect(() => {
        //console.log('hey!');

    }, []);

    useEffect(() => {
        //console.log('formState cambió!');

    }, [formState]);

    useEffect(() => {
        //console.log('email cambió!');

    }, [email]);

    // const handreInputChange = ( e ) =>{
    //     console.log( e.target.name ); 
    //     console.log( e.target.value ); 
    const handreInputChange = ( { target } ) =>{    
        setFormState({
            ...formState,
            [target.name] : target.value
        });
    }
        
    return (
        <>
        <h1>useEffect</h1>
        <hr/>
        <div className="form-group div">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value = { name }
                onChange = { handreInputChange }
            />
        </div>


        <div padding="70px" className="form-group div">
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value = { email }
                onChange = { handreInputChange }
            />
        </div>

        { (name==='123') && <Message/>}

        </>
    )
}
