import React from 'react';

export const Tag = (props) => {
    const {tags, selectTagHandler} = props;

    return (
        <div className="tag-container inner-app">
            <h3>Tag</h3>
            <div className="input-container">
                {tags.map((tag) => (
                    <div
                        className="input-item"
                        onClick={() => selectTagHandler(tag)}
                    >
                        {tag.name}
                    </div>
                ))}
            </div>
        </div>
    );
};
