import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import newPage from './components/newPage'
import HomePage from './components/HomePage'

function App() {

  return (
    <>
      <div>
        <h1 className='text-red-500'>Recipe Sharing Platform</h1>
        <p>This is a recipe sharing platform</p>
      </div>
      <HomePage />
    </>
  )
}

export default App
