import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../Action/action';

const Products = () => {
  const dispatch  = useDispatch();
  const loading   = useSelector((state) => state.loading);
  const products  = useSelector((state) => state.products);
  const error     = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchAPI());
  }, [dispatch]); 

  if (loading) return <p>Loading …</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <p>{p.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Products;
