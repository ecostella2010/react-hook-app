//import React, { useState } from 'react';
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    // const [formState, setFormState] = useState({
    //     name: '',
    //     email: '',
    //     password: ''

    // });

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''

    });


    //const {name, email, password} = formState;
    const {name, email, password} = formValues;

    // useEffect(() => {
    //     //console.log('hey!');

    // }, []);

    // useEffect(() => {
    //     //console.log('formState cambió!');

    // }, [formState]);

    useEffect(() => {
        console.log('email cambió!');

    }, [email]);

    // const handleInputChange = ( e ) =>{
    //     console.log( e.target.name ); 
    //     console.log( e.target.value ); 
    // const handleInputChange = ( { target } ) =>{    
    //     setFormState({
    //         ...formState,
    //         [target.name] : target.value
    //     });
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    }
        
    return (
        <form onSubmit= { handleSubmit }>
        <h1>FormWithCustomHook</h1>
        <hr/>
        <div className="form-group div">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value = { name }
                onChange = { handleInputChange }
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
                onChange = { handleInputChange }
            />
        </div>

        <div padding="70px" className="form-group div">
            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="******"
                value = { password }
                onChange = { handleInputChange }
            />
        </div>

        <button type="submit" className="btn btn-primary">
            Guardar
        </button>

        {/* { (name==='123') && <Message/>} */}

        </form>
    )
}