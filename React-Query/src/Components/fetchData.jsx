import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

const FetchData = () => {
   const {data , isLoading, error} = useQuery({
    queryKey: 'fetch', 
    queryFn : ()=> axios.get('https://67a0facf5bcfff4fabe147df.mockapi.io/ecommercewebsite').then(
        res => res.data
    ),
    staleTime: 1000 * 60 * 5, //5 min
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: false
   })

    if(isLoading) return <p>Loading....</p>
    if(error) return <p>{error.message}</p>
  return (
    <ul>
        {
            data.map(u=>(
                <li key={u.id}>
                    <li>Title : {u.title}</li>
                    
                </li>
            ))
        }
    </ul>
  )
}

export default FetchData