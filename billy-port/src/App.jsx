import React, { createContext, useState } from 'react'
import Main from './components/Main'
import './App.css'
import Toggle from './components/Toggle'
import useLocalStorage from 'use-local-storage'




function App() {

  if (typeof window !== 'undefined') {
    console.log('Currently on Client side')
} else {
    console.log('Currently on Server Side');
}

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useLocalStorage('isDark', defaultDark)


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
