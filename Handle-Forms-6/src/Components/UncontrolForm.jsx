// import React, { useRef } from 'react'

// const UncontrolForm = () => {
//     const refValue = useRef(null)

//     const handleForm = (e)=>{
//       e.preventDefault()
//       console.log(refValue.current.value);
//       refValue.current.value = ''
//     }

//   return (
//     <div>
//        <form onSubmit={handleForm}>

//         <input 
//         type="text" 
//         placeholder='Enter Name'
//         ref={refValue}
//          />

//         <button type="submit">Submit</button>
//        </form>
//     </div>
//   )
// }

// export default UncontrolForm


import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const username = usernameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    
    usernameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={usernameRef} placeholder="Enter Username" />
      <input type="email" ref={emailRef} placeholder="Enter Email" />
      <input type="password" ref={passwordRef} placeholder="Enter Password" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
