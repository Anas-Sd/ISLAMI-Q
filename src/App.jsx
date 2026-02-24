import React from 'react'
import {Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reference from './pages/Reference';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
        <ScrollToTop/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/reference" element={<Reference/>} />
      </Routes>
    </div>
        </>
  )
}

export default App