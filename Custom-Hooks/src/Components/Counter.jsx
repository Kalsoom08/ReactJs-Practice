import useCounter from '../CustomHook/counterHook';

const Counter = () => {
    const {count, increment, decrement} = useCounter()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter