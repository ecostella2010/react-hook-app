import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './effects.css';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    //const state = useFetch (`https://www.breakingbadapi.com/api/quotes/1`);
    const { loading, data } = useFetch (`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    //console.log ( data );

    //const loading = true;

    const { author, quote } = !!data && data[0];

    //console.log(author, quote);

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                        Loading...
                        </div> 
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0 blockquote-p"> { quote } </p>
                            <footer className="blockquote-footer blockquote-footer-a"> { author } </footer>
                        </blockquote>
                    ) 
            }

            <button 
                className="btn btn-primary"
                onClick= { increment } 
            >
                Siguiente quote
            </button>
      
        </div>
    )
}
