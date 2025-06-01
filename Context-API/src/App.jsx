import React from 'react'
import ThemeProvider from './Provider/ThemeProvider'
import NavBar from './Components/navBar';

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <NavBar/>
      </ThemeProvider>
    </div>
  )
}


export default App