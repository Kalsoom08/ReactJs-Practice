import React, { useRef } from 'react'

const UncontrolForm = () => {
    const refValue = useRef(null)

    const handleForm = (e)=>{
      e.preventDefault()
      console.log(refValue.current.value);
      refValue.current.value = ''
    }

  return (
    <div>
       <form onSubmit={handleForm}>

        <input 
        type="text" 
        placeholder='Enter Name'
        ref={refValue}
         />

        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default UncontrolForm