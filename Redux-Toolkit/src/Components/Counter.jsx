import {inc, dec} from '../Slices/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
   
   const count = useSelector(state => state.counter.value)
   const dispatch = useDispatch()

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(inc())}>+</button>
        <button onClick={()=> dispatch(dec())}>-</button>
    </div>
  )
}

export default Counter