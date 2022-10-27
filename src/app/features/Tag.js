import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { chooseTag, selectTags } from './tagSlice';

export const Tag = () => {
    // const dispatch = useDispatch();

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
        <div className='tag-container'>
            <h3>Tag</h3>
            {/* <form onSubmit={handleInput} className="budget-form">
                {tagButtons}
            </form> */}
        </div>
    )
}
