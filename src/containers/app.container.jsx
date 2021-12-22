import React from 'react';
import { CounterContainer } from "./index";
import { Alert } from "../components";


const AppContainer = () => {
  return (
    <div className="App">
      <CounterContainer />
      
      <hr/>
  
      <Alert>
        <Alert.Error>
          Warning i'm an evil error message !!
        </Alert.Error>
      </Alert>
      
    </div>
  );
}


export default AppContainer;
