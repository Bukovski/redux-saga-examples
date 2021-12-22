import React from 'react';
import { CounterContainer } from "./index";
import { Alert, Loader } from "../components";


const AppContainer = () => {
  return (
    <div className="App">
      <CounterContainer />
      
      <hr/>
  
      {/*<Alert>*/}
      {/*  <Alert.Error>*/}
      {/*    Warning i'm an evil error message !!*/}
      {/*  </Alert.Error>*/}
      {/*</Alert>*/}
      
      {/*<Alert delay={ 7000 }>*/}
      {/*  <Alert.Warning>*/}
      {/*    !!! Warning message. !!!*/}
      {/*  </Alert.Warning>*/}
      {/*</Alert>*/}
      
      {/*<Alert delay={ 5000 }>*/}
      {/*  <Alert.Success>*/}
      {/*    Success message. OK*/}
      {/*  </Alert.Success>*/}
      {/*</Alert>*/}
  
      <Loader />
      
    </div>
  );
}


export default AppContainer;
