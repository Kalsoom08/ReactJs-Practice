import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../Action/action';

const Products = ()=>{
const dispatch = useDispatch()
const products = useSelector((state)=>state.products)
const loading = useSelector((state)=>state.loading)
const error = useSelector((state)=> state.error)

useEffect(()=>{
dispatch(fetchAPI)
}, [dispatch])

if(loading) return <p>Loading...</p>
if(error) return <p>{error}</p>

return(
  <div>
    {
      products.map((product)=>{
        <div key={product.id}>
          <h1>{product.title}</h1>
        </div>
      })
    }
  </div>
)
}
export default Products;
