import React, { createContext, useState } from 'react'
import Main from './components/Main'
import './App.css'
import Toggle from './components/Toggle'
import useLocalStorage from 'use-local-storage'




function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useLocalStorage('isDark', defaultDark)
  // const [isDark, setIsDark] = useState('isDark', defaultDark)


  return (

    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <Main />
    </div>

  )
}

export default App
