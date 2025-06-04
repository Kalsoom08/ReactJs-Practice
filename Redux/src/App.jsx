import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
 const count = useSelector((state)=> state.count)
 const dispatch = useDispatch()

 const increment = ()=>{dispatch({type: 'Inc'})}
 const decrement = ()=>{dispatch({type: 'Dec'})}



  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
