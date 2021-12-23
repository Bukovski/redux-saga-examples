import React from 'react';
import { CounterContainer } from "./index";
import { Alert, Loader, Posts } from "../components";


const AppContainer = () => {
  return (
    <div className="App">
      <CounterContainer />
      
      <hr/>
  
      <Posts>
        <Posts.Form>
            <Posts.Title>Create new post</Posts.Title>
            <Posts.Input type="text" placeholder="Enter text for new post"/>
            <Posts.Input type="button" value="Create post"/>
        </Posts.Form>
      </Posts>
  
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
  
      {/*<Loader />*/}
      
    </div>
  );
}


export default AppContainer;
