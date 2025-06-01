import { useState } from 'react';
import ThemeContext from '../Context/ThemeContext';

const ThemeProvider = ({children}) =>{
    const[count, setCount] = useState(0)
    const setInc = ()=> setCount(count + 1)
    const setDec = ()=> setCount(count - 1)

  return(
    <ThemeContext.Provider value={{count,setInc, setDec}}>
      {children}
    </ThemeContext.Provider>
  )

}

export default ThemeProvider