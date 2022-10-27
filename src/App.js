import React from 'react';
import './App.css'

import { Tag } from './app/features/Tag';
import { Reselect } from './app/features/Reselect';
import { Todo } from './app/features/Todo';
import { Archive } from './app/features/Archive';
import { Quote } from './app/features/Quote';
import { Weather } from './app/features/Weather';

export const App = () => {

  return (
    <div className="content">
      <div id="background" class="backgroundImg"></div> 
        <div id="app" className="container">
          <Tag />
          <Reselect />
          <Weather />
          <Todo />
          <Archive />
          <Quote />
      </div>
    </div>
  )

}

// import React from 'react';
// import './App.css';
// import { Tag } from './app/features/Tag';
// import { Reselect } from './app/features/Reselect';
// import { Todo } from './app/features/Todo';
// import { Archive } from './app/features/Archive';
// import { Quote } from './app/features/Quote';
// import { Weather } from './app/features/Weather';

// export const App = () => {
//   return (
//     <div className="content">
//       <div id="background" class="backgroundImg"></div> 
//       <div id="app" className="container">
//         <Tag />
//         <Reselect />
//         <Weather />
//         <Todo />
//         <Archive />
//         <Quote />
//       </div>
//     </div>
//   )
// }

// // export default App;