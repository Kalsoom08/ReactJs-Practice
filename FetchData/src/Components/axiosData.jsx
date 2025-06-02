import axios from 'axios'
import React, { useEffect, useState } from 'react'

const axiosData = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
    const getData = async()=>{
        try {
            const response = await axios.get('https://67a0facf5bcfff4fabe147df.mockapi.io/ecommercewebsite')
            const data = response.data
            setPosts(data)

        } catch (error) {
            console.log(error);
        }}
    getData()
    },[])


  return (
    <div>
        <ul>
            {
                posts.map(post=>(
                    <li key={post.id}>
                        <p>{post.title}</p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default axiosData