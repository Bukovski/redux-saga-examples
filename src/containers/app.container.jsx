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
      
      <Posts>
        <Posts.Row>
          <Posts.Column>
            <h2>Sync Post</h2>
            <Posts.Card>Sync post</Posts.Card>
            <Posts.Card>Sync post</Posts.Card>
            <Posts.Card>Sync post</Posts.Card>
          </Posts.Column>
          <Posts.Column>
            <h2>Async Post</h2>
            <Posts.Card>Async Post</Posts.Card>
            <Posts.Card>Async Post</Posts.Card>
            <Posts.Card>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Posts.Card>
          </Posts.Column>
        </Posts.Row>
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
