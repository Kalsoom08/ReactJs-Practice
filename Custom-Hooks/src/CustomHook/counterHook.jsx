import { useState } from "react"

const useCounter = ()=>{
    const [count , setCount] = useState(0);

    const increment = ()=>setCount(c => c + 1);
    const decrement = ()=>setCount(c => c - 1);

    return{count, increment, decrement}

}

export default useCounter