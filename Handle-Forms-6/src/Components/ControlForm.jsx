import React, {  useState } from 'react'

const ControlForm = () => {
  // const [name, setName] = useState('')
  //  const handleChange = (e) =>{
  //   setName(e.target.value)
  // }

  const [data, setData] = useState({
    name : "",
    email: "",
  })

  const handleChange = (event) =>{
    const [name , value] = event.target;

    setData((prev)=>({
      ...prev, [name] : value
    }))
  }

   const handleSubmit = ()=>{
   setData({
    name : "",
    email: "",
   })
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <legend>
          Controlled Form
        </legend>
          <div>
          <label htmlFor="name">Name : </label>
          <input 
          type="text" 
          name="name"
          value={data.name}
          onChange={handleChange}
           />
          </div>

          <div>
          <label htmlFor="Email">Email : </label>
          <input 
          type="email" 
          name="email"
          value={data.email}
          onChange={handleChange}
          />
          </div>

          <button type='submit'>Submit</button>
      </form>
    </div>

    
  )
}

export default ControlForm