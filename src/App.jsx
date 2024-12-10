import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/first'
import Header from './components/header'
import Footer from './components/footer'
import Nav from './components/nav'
import Content from './components/content'

function App() {
  return (
    <>
    <Nav></Nav>
    <Header></Header>
    <Content></Content>
    <First></First>
    
    <Footer></Footer>
    </>
  )
}

export default App
