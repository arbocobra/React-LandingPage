import React from 'react';
import './App.css';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTags, pickTag, reload, selectTags } from './app/features/tagSlice';
import { TagSelect } from './app/components/TagSelect';
import { AppFeatures } from './app/components/AppFeatures';
import { Tag } from './app/features/Tag';
import { Reselect } from './app/features/Reselect'
import { Todo } from './app/features/Todo';
import { Archive } from './app/features/Archive';
import { Quote } from './app/features/Quote';
import { Weather } from './app/features/Weather';

export const App = () => {

  const tags = useSelector(selectTags);
    const dispatch = useDispatch();
    

    const onFirstRender = () => {
        console.log('onFirstRender')
        dispatch(loadTags());
    };

    useEffect(onFirstRender, []);

    const [tag, setTag] = useState({});

    const selectTagHandler = (tag) => {
      setTag(tag);
      dispatch(pickTag(tag));
      const selector = document.getElementById('tag-overlay');
      selector.classList.add('hidden');
  };

//   const getArt = async (tag) => {
//     // console.log(value);
//     const idNum = id;
//     const endpoint = `${metUrl}/${idNum}`;
//     try {
//         const response = await fetch(endpoint, {cache: 'no-cache'});
//         if (response.ok) {
//             const jsonResponse = await response.json();
//             renderResponse(jsonResponse)
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
    return (
        <div className="content">
            <div id="background" class="backgroundImg"></div>
            <TagSelect>
                <Tag tags={tags} selectTagHandler={selectTagHandler} />
            </TagSelect>
            <AppFeatures>
                <Reselect />
                <Weather />
                <Todo />
                <Archive />
                <Quote />
            </AppFeatures>
        </div>
    );
};
