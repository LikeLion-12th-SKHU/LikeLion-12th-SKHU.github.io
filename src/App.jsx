import './App.css';

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import About from './component/ui/About';
import Recruit from './component/ui/Recruit';
import SloganArea from './component/ui/Slogan';
import Curriculum from './component/ui/Curriculum';
import Project from './component/ui/Project';


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={    
          <SloganArea />
          <About />
        <Recruit />
        <Curriculum />
        <Project />
        } />
        <Route path="/qna" element={<div style={{height:'200vh'}}>qna page</div>} />
      </Routes>

    </>
  );
}

export default App;
