import React, { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'
import Main from './components/Main'
import './App.css'


export const ThemeContext = createContext('null')

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Main />
        <div className='switch'>
          <label> {theme === 'light' ? 'light mode' : 'dark mode'}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
