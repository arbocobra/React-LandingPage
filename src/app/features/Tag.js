import React from 'react';

export const Tag = (props) => {
    const {tags, selectTagHandler} = props;

    return (
        <div className="tag-container inner-app">
            <div className="feature-inner"> 
                {/* <h3>Tag</h3> */}
                {tags.map((tag) => (
                    <div className="input-item" key={tag.id} onClick={() => selectTagHandler(tag)}>
                        {tag.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
