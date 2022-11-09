import React from 'react'
// import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags, reselect } from './tagSlice';
import { getArt } from '../components/helperFunctions';

export const Reselect = () => {

    // add name of art and artist to box
    // if i can, show image thumbnail on hover

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
            <h3>Change image</h3>
            <div className="input-container">
                {reselectTags.map((tag) => (
                    <div className="input-item" key={tag.id} onClick={() => reselectTagHandler(tag)}>
                        {tag.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
