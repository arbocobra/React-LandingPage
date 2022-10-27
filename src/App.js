import React from 'react';
import './App.css'

import { TagSelect } from './app/components/TagSelect';
import { AppFeatures } from './app/components/AppFeatures';
// import { Reselect } from './app/features/Reselect';
// import { Todo } from './app/features/Todo';
// import { Archive } from './app/features/Archive';
// import { Quote } from './app/features/Quote';
// import { Weather } from './app/features/Weather';

export const App = () => {

  return (
    <div className="content">
      <div id="background" class="backgroundImg"></div>
      <TagSelect />
      {/* <div className="tag-container-outer">
          <Tag />
      </div> */}
      <AppFeatures />
      {/* <div className="app-container">
          <Reselect />
          <Weather />
          <Todo />
          <Archive />
          <Quote />
      </div> */}
    </div>
  )

}