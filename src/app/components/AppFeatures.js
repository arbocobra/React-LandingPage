import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTags } from '../features/tagSlice';

// import { Reselect } from '../features/Reselect'
// import { Todo } from '../features/Todo';
// import { Archive } from '../features/Archive';
// import { Quote } from '../features/Quote';
// import { Weather } from '../features/Weather';

export const AppFeatures = (props) => {

    // const tags = useSelector(selectTags);
    // const dispatch = useDispatch();

    // const featureRender = () => {
    //     console.log('render appfeatures');
    //     dispatch(reload())
    // };

    // useEffect(featureRender, []);

    // const dispatch = useDispatch();

    // const featureRender = () => {
    //     console.log('render appfeatures');

    // };

    // useEffect(featureRender, []);

    return <div className="app-container">{props.children}</div>;
};
