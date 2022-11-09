import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadQuote, selectQuote } from './quoteSlice';

export const Quote = () => {

    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();    

    useEffect(() => {
        dispatch(loadQuote())
      }, [dispatch]);

    return (
        <div className='quote-container inner-app'>
            <div className="feature-inner">
                <h4>{quote.text}</h4>
                <p>{quote.author}</p>
            </div>
        </div>
    )
}