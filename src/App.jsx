import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardOne from './components/CardOne'
import Services from './components/Services'
import DoctorsCards from './components/DoctorsCards'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Services></Services>
      <DoctorsCards></DoctorsCards>
    </>
  )
}

export default App
