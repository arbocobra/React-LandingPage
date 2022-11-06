import React from 'react'
// import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, reselect } from './tagSlice';
import { getArt } from '../components/helperFunctions';

export const Reselect = () => {

    const tags = useSelector(selectTags);
    const dispatch = useDispatch();

    const reselectTags = tags.filter(tag => tag.selected === false);

    const reselectTagHandler = (tag) => {
        dispatch(reselect(tag));
        getArt(tag.id);
        // setFeaturesVisible(true);
    };

    return (
        <div className='reselect-container inner-app'>
            <h3>Reselect</h3>
            <div className="input-container">
                {reselectTags.map((tag) => (
                    <div className="input-item" onClick={() => reselectTagHandler(tag)}>
                        {tag.name}
                    </div>
                ))}
            </div>
        </div>
    )
}