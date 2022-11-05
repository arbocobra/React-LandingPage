import React, {useState, useEffect} from 'react';


export const Reselect = (props) => {
    const {tags, selectTagHandler} = props;
    console.log(tags)
    console.log(selectTagHandler)
    
    

    return (
        <div className='reselect-container inner-app'>
            <h3>Reselect</h3>
        </div>
    )
    // return (
    //     <div className="tag-container inner-app">
    //         <h3>Tag</h3>
    //         <div className="input-container">
    //             {tags.map((tag) => (
    //                 <div
    //                     className="input-item"
    //                     onClick={() => selectTagHandler(tag)}
    //                 >
    //                     {tag.name}
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    // );
}