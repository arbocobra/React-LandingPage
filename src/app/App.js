import React from 'react';
import './App.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTags, pickTag, reload, selectTags } from './features/tagSlice';
import { getArt } from './components/helperFunctions';

import { TagSelect } from './components/TagSelect';
import { AppFeatures } from './components/AppFeatures';
import { Tag } from './features/Tag';
// import { Reselect } from './features/Reselect';
// import { Todo } from './features/Todo';
// import { Archive } from './features/Archive';
// import { Quote } from './features/Quote';
// import { Weather } from './features/Weather';

// Get info for background - display name/artist - react state? 

export const App = () => {
    
    const tags = useSelector(selectTags);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        console.log('onFirstRender');
        dispatch(loadTags());
    };

    useEffect(onFirstRender, []);

    // const [tag, setTag] = useState({});

    const [featuresVisible, setFeaturesVisible] = useState(false);

    const selectTagHandler = (tag) => {
        // setTag(tag);
        dispatch(pickTag(tag));
        getArt(tag.id);
        setFeaturesVisible(true);
    };

    if (!featuresVisible) {
        return (
            <div className="content">
                <div id="background" class="backgroundImg"></div>
                <TagSelect>
                    <Tag tags={tags} selectTagHandler={selectTagHandler} />
                </TagSelect>
            </div>
        );
    } else {
        return (
            <div className="content">
                <div id="background" class="backgroundImg"></div>
                <AppFeatures />
                    
            </div>
        );
    }
};
