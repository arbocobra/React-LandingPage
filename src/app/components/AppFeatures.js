import React from 'react';

import { Reselect } from '../features/Reselect'
import { Todo } from '../features/Todo';
import { Archive } from '../features/Archive';
import { Quote } from '../features/Quote';
import { Weather } from '../features/Weather';

export const AppFeatures = () => {
    return (
        <div className="app-container">
          <Reselect />
          <Weather />
          <Todo />
          <Archive />
          <Quote />
      </div>
    )
}