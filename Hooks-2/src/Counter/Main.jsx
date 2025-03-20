import React, { useState } from 'react'
import Result from '../Counter/Result';

const Main = () => {
    const [count, SetCount ] = useState(0)

    const CounterFunc = ()=>{
        SetCount(count + 1)
    }
  return (
    <div className='flex flex-col-reverse'>
     <button type="button" 
     className='bg-amber-400 px-10 py-2 rounded-sm mt-4 '
     onClick={CounterFunc}
     >+ 1</button>
     
     <Result output = {count}/>
    </div>
  )
}

export default Main