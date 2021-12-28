import React from 'react';
import { CounterContainer, PostsContainer } from "./index";


const AppContainer = () => {
  return (
    <div className="App">
      <CounterContainer />
      
      <hr/>
  
      <PostsContainer />
    </div>
  );
}


export default AppContainer;
