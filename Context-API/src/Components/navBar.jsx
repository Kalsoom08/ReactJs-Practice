import React, { useContext } from 'react'
import themeContext from '../Context/ThemeContext'

const navBar = () => {

const {count,setInc, setDec} = useContext(themeContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setInc}>+</button>
      <button onClick={setDec}>-</button>
    </div>
  )
}

export default navBar