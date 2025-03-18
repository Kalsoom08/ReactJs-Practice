import React from 'react';
import Child from '../src/Children/Child'; 

const App = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child name="1st Prop" /> 
      <Child name2 = "2nd Prop"/>
    </div>
  );
};

export default App;
