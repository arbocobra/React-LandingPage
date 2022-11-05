import React from 'react';

// import { Reselect } from '../features/Reselect'
// import { Todo } from '../features/Todo';
// import { Archive } from '../features/Archive';
// import { Quote } from '../features/Quote';
// import { Weather } from '../features/Weather';

export const AppFeatures = (props) => {
  // const {tags, selectTagHandler} = props;
    return (
        <div className="app-container">
          {props.children}
      </div>
    )
}