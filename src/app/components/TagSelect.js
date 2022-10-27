import React from 'react';

import { Tag } from '../features/Tag';

export const TagSelect = (props) => {
  const {tags, selectTagHandler} = props;
  
    return (
        <div id='tag-overlay' className="tag-container-outer">
            <h3>Tag</h3>
            <Tag tags={tags} selectTagHandler={selectTagHandler} />
      </div>
    )
}