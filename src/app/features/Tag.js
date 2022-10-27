import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTags, pickTag, selectTags } from './tagSlice';
import { TagForm } from '../components/TagForm'

export const Tag = () => {

    const tags = useSelector(selectTags)
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadTags());
    }

    useEffect(onFirstRender, []);

    const [tag, setTag] = useState(null);
    // useEffect(() => {
    //     function
    // }, [tag])

    const selectTagHandler = (tag) => {
        setTag(tag);
        dispatch(pickTag(tag))
    }
    // const handleInput = (e) => {
    //     e.preventDefault();
    //     dispatch(chooseTag({ }));
    // };

    // const tagButtons = () => {
    //     selectTags.map(tag => {
    //         <input 
    //         type='radio'
    //         value={tag.name}
    //         />
    //     })
    // }
    
    return (
        <div className='tag-container inner-app'>
            <h3>Tag</h3>
            <div className='input-container'>
                {tags.map(tag => (
                    // <button className='input-item' onClick={onClickHandler} value={tag.name} name={tag.name}>{tag.name}</button>
                    <div className='input-item' onClick={() => selectTagHandler(tag)}>{tag.name}</div>
                ))}
            </div>
            {/* <TagForm tags={tags} onClickHandler={() => selectTagHandler()} /> */}
            {/* <FavoriteButton onClickHandler={() => addFavoriteHandler(movie)} name={buttonName} /> */}
            
        </div>
    )
}

// 

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// export const AllMovies = () => {

//     const allMovies = useSelector(selectFilteredAllMovies);
//     const dispatch = useDispatch();
//     const onFirstRender = () => {
//         dispatch(loadData());
//     };

//     useEffect(onFirstRender, [])

//     const addFavoriteHandler = (movie) => {
//         dispatch(addFavorite(movie));
//     }

//     const buttonName = 'Favourite'

//     return (
//         <div className="all-movies-container">
//             <h3>All Movies</h3>
//             <div className='all-movies-inner-container'>
//                 {allMovies.map(movie => (
//                     <div key={movie.id} className='movie-container'>
//                         <div className="movie-container-inner">
//                             <Movie movie={movie} key={movie.id} />
//                             {/* <FavoriteButton buttonName={buttonName} onClickHandler={onClickHandler} /> */}
//                             <FavoriteButton onClickHandler={() => addFavoriteHandler(movie)} name={buttonName} />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }
