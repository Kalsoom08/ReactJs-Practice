import React from 'react'
import Main from './Counter/Main';
import Result from './Counter/Result';

const App = () => {
  return (
    <div className='flex justify-center items-center my-10 '>
    <div className='bg-emerald-800 w-2xl flex justify-center p-52 '> 
    <Result/>
    <Main/>
    </div>
    </div>


  )
}

export default App