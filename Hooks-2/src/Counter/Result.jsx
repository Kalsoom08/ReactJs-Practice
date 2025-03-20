import React from 'react'

const Result = ({output}) => {
  return (
    <div>
        <h1 
        className='border border-amber-50 text-amber-50 rounded-2xl text-center'
        >{output}</h1>
    </div>
  )
}

export default Result