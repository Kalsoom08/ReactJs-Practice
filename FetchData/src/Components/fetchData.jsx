import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [posts , setPosts] = useState([])

  useEffect(()=>{
    const fetchFunction =async ()=>{
      try {
    const response = await fetch('https://67a0facf5bcfff4fabe147df.mockapi.io/ecommercewebsite')
    if (!response.ok){
    throw new Error ("Not OK")
    }
    const data = await response.json()
    setPosts(data)

    } catch (error) {
        console.log(error);
      }}
   fetchFunction()
  },[])

  return (
    <div>
     <ul>
      {
        posts.map(post =>(
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))
      }
     </ul>
    </div>
  )
}

export default FetchData