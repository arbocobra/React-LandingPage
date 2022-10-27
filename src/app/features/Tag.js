import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadTags, pickTag, selectTags } from './tagSlice';
import { TagForm } from '../components/TagForm';

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
