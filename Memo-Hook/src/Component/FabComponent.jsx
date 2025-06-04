import { useMemo } from "react";

function FibonacciCalculator({ n }) {
  const fib = useMemo(()=>{
  const fabSeries = (num)=>{
    if(num <= 0) return num
    return fabSeries(num - 1) + fabSeries(num - 2)
  }
  return fabSeries(n)
  },[n])

  return (
    <div>
      Fibonacci of {n} is {fib}
    </div>
  ); 
}

export default FibonacciCalculator
