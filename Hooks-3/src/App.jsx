import React from 'react'
import {useState, useEffect} from 'react';

const App = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchData = async ()=>{
     const response = await fetch("https://67a0facf5bcfff4fabe147df.mockapi.io/ecommercewebsite")
     const result = await response.json()
      setData(result)
    }
    fetchData()
  },[])
  return (
    <div>
      <ul>
        {data.map((item)=>{
          return(
            <li>{item.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App