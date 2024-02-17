import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div style={{height:'200vh'}}></div>} />
        <Route path="/qna" element={<div style={{height:'200vh'}}>qna page</div>} />
      </Routes>
    </>
  );
}

export default App;
