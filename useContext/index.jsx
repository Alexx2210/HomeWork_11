import React from 'react';
import User from './Sberbank2';

function Component1() {
    return(
        <>
  <User.Consumer>  
  {user => <h1>Hello, {user}</h1>} 
    </User.Consumer>
    <Component2/>
  </>
)};

function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3/>
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4/>
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5/>
      </>
    );
  }
  
  function Component5() {
    return (
      <>
        <User.Consumer>  
            {user => <h1>Hello, {user}, again</h1>} 
        </User.Consumer>
      </>
    );
  }

export default Component1;
